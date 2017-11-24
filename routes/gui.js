const express = require('express');
let router = express.Router();
let Student = require('../models/student');
let City = require('../models/city');

// DOM Routes
router.get('/students', (req, res) => {
	Student.find().then((students) => {
	  res.render('students', {students});
	})
});

router.post('/students', (req, res) => {
	console.log(req.body.student_name)
  let student = new Student ({ name: req.body.student_name })
  student.save((err) => {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('student created');
	  }
	  res.redirect('/students');
	})
})

// DOM Routes
router.get('/cities', (req, res) => {
	City.find().then((cities) => {
	  res.render('cities', {cities});
	})
});

// router.post('/students', (req, res) => {
// 	console.log(req.body.student_name)
//   let student = new Student ({ name: req.body.student_name })
//   student.save((err) => {
// 	  if (err) {
// 	    console.log(err);
// 	  } else {
// 	    console.log('student created');
// 	  }
// 	  res.redirect('/students');
// 	})
// })

module.exports = router;