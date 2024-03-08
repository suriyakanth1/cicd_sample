const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Manual trigger cicd pipeline test on 08 March');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
