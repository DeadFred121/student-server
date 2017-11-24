const { mongoose, db } = require('../database');
const Student = db.model('Student', { name: String });

module.exports = Student;