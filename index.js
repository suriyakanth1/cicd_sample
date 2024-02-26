const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Manual trigger cicd pipeline test on 23th Feb 2024 Time: 10:55');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
