
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

//defining get route
app.get('/',  (req, res) => {
  client.get('visit_count')
  .then(result => {
    result++;
    res.render('index', {count: result});
    client.set('visit_count', result)
  })
  .catch(err => console.log(err.message));
})
