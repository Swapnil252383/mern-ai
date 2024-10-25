const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // You can choose a different port if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define a Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(201).send('Message sent successfully!');
  } catch (error) {
    res.status(400).send('Error saving message');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
