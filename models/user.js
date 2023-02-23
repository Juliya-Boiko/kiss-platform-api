const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const userSchema = Schema({
  name: {
    type: String, 
    required: [true, 'Name is required'],
    minLength: 2,
    trim: true
  },
  email: {
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String, 
    required: [true, 'Password is required'],
  },
  token: {
    type: String,
    default: null,
  },
  verificationToken: {
    type: String,
    default: null
  }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleErrors);

const User = model('user', userSchema);

module.exports = User;