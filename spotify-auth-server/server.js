require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/spotify-token', async (req, res) => {
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: {
          username: process.env.SPOTIFY_CLIENT_ID,
          password: process.env.SPOTIFY_CLIENT_SECRET
        }
      }
    );
    res.json({ token: response.data.access_token });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener token" });
  }
});

app.listen(3001, () => console.log('Servidor auth en http://localhost:3001'));