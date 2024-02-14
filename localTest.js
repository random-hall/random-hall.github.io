const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname+'/_site'));

app.listen(port, () => {
  console.log(`Test site listening on port ${port}`);
});