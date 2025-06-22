const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const SELF_URL = process.env.SELF_URL;

app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(PORT, () => {
  console.log(`Keep-alive running on port ${PORT}`);
  setInterval(() => {
    axios.get(SELF_URL)
      .then(() => console.log(`Pinged ${SELF_URL}`))
      .catch(err => console.error('Ping failed:', err.message));
  }, 5 * 60 * 1000); // every 5 minutes
});
