const express = require('express');
const app = express();
const port = 3001;

app.get('/logistics', (req, res) => {
  res.json({ message: 'You have communicated with the Logistics service' });
});

app.listen(port, () => {
  console.log(`Logistics service listening on port ${port}`);
});
