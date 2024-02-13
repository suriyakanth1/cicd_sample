const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Manual trigger cicd pipeline test on 13th Feb 2024');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
