const express = require('express');
const bodyParser = require('body-parser');
const path=require("path");
const app = express();


// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/',(req,res)=>{
  res.sendFile('index.html',{root:'./'});
})

// Route to handle form submission
app.post('/inquire', (req, res) => {
  const destination = req.body.destination;
  const people = req.body.people;
  const checkin = req.body.checkin;
  const checkout = req.body.checkout;

  // Here you can process the form data, such as saving it to a database or performing other actions

  res.send('Form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
