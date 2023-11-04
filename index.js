const express = require('express')
const app = express()
const port = 8181

app.get("/", (req, res) => {
  res.json({
    message: "You are visiting root route"
    });
});

app.get("/login", (req, res) => {
    res.json({
      message: "You are visiting login route"
      });
  });
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})