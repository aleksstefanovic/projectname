var express = require("express");
var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/storypanelone', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/storypanelone.html'));
});
app.get('/storypaneltwo', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/storypaneltwo.html'));
});
app.get('/storypanelthree', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/storypanelthree.html'));
});
app.get('/storypanelthree', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/storypanelthree.html'));
});
app.get('/storypanelfour', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/storypanelfour.html'));
});
app.get('/storypanelfive', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/storypanelfive.html'));
});
app.get('/end', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/content/end.html'));
});

app.use(express.static('public'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
