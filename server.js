
const express = require('express');
const redis = require('redis');


//initialize app
const app = express();
app.listen(7575, () => {
  console.log("Listening on port 7575...")
});
app.set('view engine', 'ejs');


//initialize redis-db
const client = redis.createClient();
client.connect();
let count = 0;

//defining get route
app.get('/',  (req, res) => {
  client.set('visit_count', JSON.stringify(count++));
  let visit_count = client.get('visit_count')
  .then(result => res.render('index', {count: result}))
  .catch(err => console.log(err.message));
})