const User = require('../models/User');
const { createToken } = require('../helpers/jwt.helper');

class AuthController {

    login = async (req, res) => {
        try {

            const user = await User.findOne(
                {
                    correo: req.body.correo,
                    clave: req.body.clave
                }
            ).exec();

            if (user) {
                return res.status(200).send(createToken(user));
            }

        } catch (error) {
            throw error
        }
    }

    getUser = async (req, res) => {
        try {

            const user = await User.findById(req.userId).exec();

            if (user) {
                return res.json(user);
            }

        } catch (error) {
            throw error
        }
    }

}

module.exports = new AuthController();