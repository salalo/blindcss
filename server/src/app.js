import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import cors from 'cors';
import mongoose, { MongooseDocument } from 'mongoose';
import passport from 'passport';
import socketIO from 'socket.io';

import auth from './routes/auth.js';
import lobbies from './routes/lobbies.js';
import { addLobby } from './actions/lobby.js';
import keys from './config/keys.js';
import socialAuth from './actions/auth.js';

const app = express();
const server = app.listen(process.env.PORT || 8081);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('User connected');

  socket.on('create_lobby', lobby_id => {
    socket.join(lobby_id);
    addLobby(lobby_id);
    // console.log('lobby created', lobby_id, lobbies);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(
  session({
    name: 'SESS',
    secret: keys.cookie.secret,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: false,
      expires: new Date(253402300000000)
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.set('trust proxy', 1); // trust first proxy

app.use('/auth', auth());
app.use('/lobbies', lobbies());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080'
  })
);

mongoose
  .connect(keys.mongodb.DB, { useNewUrlParser: true })
  .then(console.log('Connected successfully!'))
  .catch(err => console.error('\nCan not connect to the database\n\n' + err));
