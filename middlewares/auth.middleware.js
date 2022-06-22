
const { verify } = require('jsonwebtoken');

class AuthMiddleware {

    verify = (req, res, next) => {
        const token = req.header('auth-token');

        if (!token) return res.status(401).json('Access denied');

        const payload = verify(token, 'secret_key');

        req.userId = payload._id;

        next();
    }

}

module.exports = new AuthMiddleware();