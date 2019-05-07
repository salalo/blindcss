import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },

  googleID: {
    type: String
  },

  facebookID: {
    type: String
  },

  rank: {
    type: Number,
    trim: true,
    default: 0
  },

  points: {
    type: Number,
    default: 500
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
