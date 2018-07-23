const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
let newResponse;
let responseSchema;

mongoose.connect(
  'mongodb://localhost:27017/rsvp',
  { dbName: 'rsvp' }
);
app.set('views', './public/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

responseSchema = mongoose.Schema({
  name: String,
  email: String,
  isAttending: String,
  numOfGuests: Number,
});
const Response = mongoose.model('Response', responseSchema);

app.post('/reply', (req, res) => {
  console.log(req.body);
  newResponse = new Response({
    name: req.body.name,
    email: req.body.email,
    isAttending: req.body.isAttending,
    numOfGuests: req.body.numOfGuests,
  });
  newResponse.save();
  res.render('reply.pug');
});

app.get('/guests', (req, res) => {
  Response.find((err, responses) => {
    if (err) console.error(err);
    res.render('guests.pug', { responses: responses });
  });
});

// app.use(express.urlencoded());

app.get('/', function(req, res) {
  res.render('index.pug');
});

// app.get('/reply', (req, res) => {
//   res.render('reply.pug', { body: req.body });
// });

app.listen(3000, () => console.log('Esketiiiit'));
