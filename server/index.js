const compression = require('compression');
const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "..", "dist");

app.use(compression());
app.use(express.static(publicPath));

app.get("*", function(req, res){
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app running`);
});