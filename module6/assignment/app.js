const express = require('express');

const routes = require('./routes/routes')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000);