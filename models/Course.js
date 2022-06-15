const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoursSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    //description'ın başında ve sonunda bulunan boşlukları kaldırmaya yarar
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CoursSchema);

module.exports = Course;