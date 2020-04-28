const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const AccountRoutes = require('./routes/account');

const app = express();

const PORT = process.env.PORT || 3011;

app.set('view engine', 'pug');
app.use(cors());
app.use(bodyparser.json());
app.use(morgan('dev'));

app.use('/', AccountRoutes);

app.listen(PORT, () => {
    console.log('Service: Email, PORT:', PORT);
})