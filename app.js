const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
routes = require('./server/routes/routes.js');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'templates')));

app.use(routes);

app.listen(port, () => {
    console.log(`now live on ${port}`);
});