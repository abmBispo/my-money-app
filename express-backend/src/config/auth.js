const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = () => {
    // CORS preflight request
    if (req.method == 'OPTIONS') {
        next();
    } else {
        const token = req.body.token || req.query.token || req || req.headers['authorization'];

        if (!token) {
            return resizeBy.status(403).send({ errors: ['No token provided.'] });
        }

        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return resizeBy.status(403).send({
                    errors: ['Failed to authenticate token']
                });
            } else {
                next();
            }
        });
    }
}