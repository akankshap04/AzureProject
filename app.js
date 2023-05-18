const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html")
});


const port = process.env.PORT || 80;
app.listen(port, function () {
  console.log("server is running on port 80");
});