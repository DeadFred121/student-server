const express = require('express');
let router = express.Router();
let Student = require('../models/student');
let City = require('../models/city');

// API Routes
router.get('/students', (req, res) => {
  Student.find().populate('city').then((result) => {
    res.send(result);    
  })
});

router.get('/cities', (req, res) => {
  City.find().then((result) => {
    res.send(result);
  })
})

router.post('/students', (req, res) => {
	console.log(req.body)
  let student = new Student ({ name: req.body.student_name, city: req.body.student_city });
  student.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('student created');
    }
    res.send(student);
  });
});

router.get('/students', (req, res) => {
  Promise.all([
    Student.find().populate('city'),
    City.find()
  ]).then(([students, cities]) => {
    res.render('students', { students, cities });
  })
});

router.post('/cities', (req, res) => {
  console.log(req.body)
  let city = new City({ name: req.body.name });
  city.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('City created');
    }
    res.send(city);
  });
});

module.exports = router;