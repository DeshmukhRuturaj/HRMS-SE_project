const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/HRM_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertAdmin = async () => {
  try {
    const hash = bcrypt.hashSync('ruturaj123', 5);
    const newAdmin = new Admin({
      name: 'Ruturaj Deshmukh',
      email: 'admin@example.com',
      password: hash,
      profilepic: 'path/to/profilepic.jpg',
      profilecv: 'path/to/profilecv.pdf',
    });

    await newAdmin.save();
    console.log('Admin has been created!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting admin:', error);
    mongoose.connection.close();
  }
};

insertAdmin();