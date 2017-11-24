const express = require('express');
let router = express.Router();
let Student = require('../models/student');

// API Routes
router.get('/students', (req, res) => {
  res.send(students);
});

router.post('/students', (req, res) => {
	console.log(req.body)
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

module.exports = router;