/* eslint-disable no-undef */
// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample route to handle career form submissions
app.post('/api/career-form', (req, res) => {
  const formData = req.body;

  // Here, you would typically save the data to a database
  console.log('Career Form Data:', formData);

  // Respond back to the client
  res.status(201).json({ message: 'Form submitted successfully!', data: formData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
