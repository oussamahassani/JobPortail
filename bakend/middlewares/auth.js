const jwt = require('jsonwebtoken');
const secret = 'secret';
verifyToken = (req, res, next) => {
    let token = req.headers['token'];
    if (!token) {
        return res.status(403).send({
            auth: false,
            message: 'No token provided.',
        });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            res.status(401).send({ message: 'Unvalid Token' });
        }
        req.userId = decoded.id;
        next();
    });
};
const authJwt = {};
authJwt.verifyToken = verifyToken;
module.exports = authJwt;

