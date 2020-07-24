const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))

server.listen(port, function(){
    console.log(`EXPRESS BACKEND IS RUNNING ON ${port}.`);
})

module.exports = server;