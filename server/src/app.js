import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { join } from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';

import auth from './routes/auth.js';
import keys from './config/keys.js';
import socialAuth from './actions/auth.js';

const app = express();

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

app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.set('trust proxy', 1); // trust first proxy
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080'
  })
);

// connect to database
mongoose.connect(keys.mongodb.DB, { useNewUrlParser: true }).then(
  () => {
    console.log('\nConnected successfully!');
  },
  err => console.log('\nCan not connect to the database\n\n' + err)
);

app.listen(process.env.PORT || 8081);
