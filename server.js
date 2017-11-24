const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
const gui = require('./routes/gui');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));

// Handle all the routes
// Reference API file
app.use('/api', api);
// Reference Pretty file
app.use('', gui)

app.listen(port, console.log('Server running...'));