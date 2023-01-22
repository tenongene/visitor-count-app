
const express = require('express');



//initialize app
const app = express();
app.listen(7575);
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index', {count: 0})
})