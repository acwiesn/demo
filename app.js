// Require'ing both so .defaults will fill in the blanks
// DO NOT EDIT .defaults - add your specific settings to .env
// DO NOT CHECK .env into source control!
// Refer to INSTRUCTIONS.md

var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(3000, function () {
    console.log('Listening on port %s...', server.address().port);
});
