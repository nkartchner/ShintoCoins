var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})