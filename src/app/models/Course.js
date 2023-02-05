const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema ({
    name: {type: String, require: true,},
    description: {type: String},
    img: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    video: {type : String},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);