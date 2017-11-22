const express = require('express');
let router = express.Router();
let students = require('../students');

// DOM Routes
router.get('/students', (req, res) => {
  res.render('students', {students});
});

router.post('/students', (req, res) => {
	console.log(req.body.student_name)
  let student = req.body.student_name;
  students.push(student);
  res.redirect('/students');
});

module.exports = router;