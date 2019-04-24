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
    type: String,
    unique: true
  },

  facebookID: {
    type: String,
    unique: true
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
