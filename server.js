const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.status(200)
  });

  app.listen(PORT, () => {
      console.log("The Express server is listening on port 8080.")
  })
  
  module.exports = app;