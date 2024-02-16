const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('manual trigger cicd pipeline..');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
