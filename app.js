const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/views/registration.html');
});

app.post('/register', (req, res) => {
  // Handle form submission here
  const { username, email, password } = req.body;
  // You can save this data to a database or perform any other necessary actions.

  res.send('Registration Successful');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
