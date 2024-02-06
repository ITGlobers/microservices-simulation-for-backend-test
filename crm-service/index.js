const express = require('express');
const app = express();
const port = 3002;

app.get('/crm', (req, res) => {
  res.json({ message: 'You have communicated with the CRM service' });
});

app.listen(port, () => {
  console.log(`CRM service listening on port ${port}`);
});
