const express = require('express');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);

    const billingCycle = require('../api/billingCycle/billingCycleService.js');
    billingCycle.register(router, '/billingCycles');
}