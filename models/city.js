const { mongoose, db } = require('../database');
const City = db.model('City', {
    name: { type: String, required: true }
});

module.exports = City;