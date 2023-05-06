// EXPRESS SET UP
require('dotenv').config()
var cors = require('cors')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.EXPRESSPORT;
const users = require('./routes/users')

/* App Use Statements */
app.use(cors())
app.use('/users', users)

app.use(express.static('public'))

/* App listening test*/
app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});