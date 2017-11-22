const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/students', (req, res) => {
  res.send(students);
});

app.get('/students', (req, res) => {
  res.render('students', {students});
});

app.post('/students', (req, res) => {
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

app.listen(port);