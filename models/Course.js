const mongoose = require('mongoose');
const slugify = require('slugify');

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
  slug: {
    type: String,
    unique: true,
  },
});

CoursSchema.pre('validate', function(next){
  this.slug = slugify(this.name, {
    lower: true,
    strict: true
  })
  next();
})

const Course = mongoose.model('Course', CoursSchema);

module.exports = Course;
