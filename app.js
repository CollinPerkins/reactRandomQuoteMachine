const express = require('express');
const path = require('path');
const port = process.env.PORT || 3030;
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/'));

app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});
app.listen(port);
console.log("Server Started " + port);
