const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
var bodyParser = require("body-parser");
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './client/build')));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.post("/api", (req, res) => {
  console.log(req.body);
  const { message } = req.body;
  console.log(`Str from the client - ${message}`);
  res.send(message);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
