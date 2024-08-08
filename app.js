const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON responses
app.use(express.json());

// Routes for fetching character details
app.get('/api/characters', async (req, res) => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch characters' });
  }
});
 
// Routes for fetching spell details
app.get('/api/spells', async (req, res) => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/spells');
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch spells' });
  }
});

// Routes for fetching staff details
app.get('/api/characters/staff', async (req, res) => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters/staff');
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch staff characters' });
  }
});

// Routes for fetching student details
app.get('/api/characters/students', async (req, res) => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters/students');
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch student characters' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
