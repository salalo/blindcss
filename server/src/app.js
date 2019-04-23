import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { join } from 'path';
import cors from 'cors';
import mongoose from 'mongoose';

import auth from './routes/auth.js';
import keys from './config/keys.js';
import socialAuth from './actions/auth.js';

const app = express();

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

app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('trust proxy', 1); // trust first proxy
app.use('/auth', auth());

app.listen(process.env.PORT || 8081);
