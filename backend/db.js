const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    
      await mongoose.connect('mongodb://127.0.0.1:27017/store-rating-app');

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
