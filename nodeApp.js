/**
 * Created by userr on 14/11/2016.
 */
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
app.use(express.static(__dirname + '/app'));
app.listen(3000);
console.log("Listening... on 3000");