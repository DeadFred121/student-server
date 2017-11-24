const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Student = db.model('Student', {
    name: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'City' }
});

module.exports = Student;