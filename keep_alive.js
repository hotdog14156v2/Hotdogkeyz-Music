const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const SELF_URL = process.env.SELF_URL; // Set this in Render environment variables

app.get('/', (req, res) => {
  res.send('🎵 Bot is alive and kicking!');
});

app.listen(PORT, () => {
  console.log(`✅ Keep-alive server running on port ${PORT}`);

  // Ping the bot's own URL every 5 minutes
  setInterval(() => {
    axios.get(SELF_URL)
      .then(() => console.log(`🔁 Self-ping sent to ${SELF_URL} at ${new Date().toLocaleString()}`))
      .catch(err => console.error('❌ Self-ping failed:', err.message));
  }, 5 * 60 * 1000); // every 5 minutes
});

