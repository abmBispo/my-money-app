const port = 3000;
const bodyParser = require('body-parser');
const allowCors = require('./cors');
const express = require('express');
const server = express();
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, function () {
    console.log(`EXPRESS BACKEND IS RUNNING ON ${port}.`);
})

module.exports = server;