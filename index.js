const express = require('express');
const port = 5000;
const path = require('path');
const app = express();
console.log(path.join(__dirname, './client/dist'));
app.use(express.static(path.join(__dirname, './client/dist')));

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
