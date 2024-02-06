const express = require('express');
const app = express();
const port = 3003;

app.get('/erp', (req, res) => {
  res.json({ message: 'You have communicated with the ERP service' });
});

app.listen(port, () => {
  console.log(`ERP service listening on port ${port}`);
});
