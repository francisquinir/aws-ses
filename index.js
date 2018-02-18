var express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var load = require('express-load');
load('infra').then('routes').into(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("server running");
})

