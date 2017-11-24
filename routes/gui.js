const express = require('express');
let router = express.Router();
let Student = require('../models/student');
let City = require('../models/city');

// DOM Student Routes
router.get('/students', (req, res) => {
	Promise.all([
		Student.find().populate('city'),
		City.find()
	]).then(([students, cities]) => {
		res.render('students', { students, cities });
	})
});

router.get('/students/:id', (req, res) => {
	Student.findById(req.params.id).populate('city').then((student) => {
		res.render('student', { student });
	})
		.catch((error) => {
			res.status(404).json({msg: 'Student not found!'})
	})
});

router.post('/students', (req, res) => {
  let student = new Student ({ name: req.body.student_name, city: req.body.student_city})
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

router.get('/cities/:id', (req, res) => {
	City.findById(req.params.id).then((city) => {
		res.render('city', { city });
	})
		.catch((error) => {
			res.status(404).json({ msg: 'City not found!' })
		})
})

router.post('/cities', (req, res) => {
	console.log(req.body.city_name)
  let city = new City ({ name: req.body.city_name })
  city.save((err) => {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('city created');
	  }
	  res.redirect('/cities');
	})
})

module.exports = router;