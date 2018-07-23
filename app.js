const express = require('express');

const mongoose = require('mongoose');
const app = express();

app.set('views', './public/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
// app.use(express.urlencoded());

app.post('/reply', (req, res) => {
  console.log(req);
  res.render('reply.pug', { body: req.body });
});

app.get('/', function(req, res) {
  res.render('index.pug');
});

// app.get('/reply', (req, res) => {
//   res.render('reply.pug', { body: req.body });
// });

app.listen(3000, () => console.log('Esketiiiit'));
