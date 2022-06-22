const moment = require('moment');
const { sign } = require('jsonwebtoken');

class JwtHelper {

    createToken = (user) => {

        const payload = {
            sub: user.id,
            correo: user.correo,
            usuario: user.usuario,
            dni: user.dni,
            iat: moment().unix(),
            exp: moment().add(2, 'days').unix()
        }

        return {
            token: sign(payload, "secret_key"),
            iat: payload.iat,
            exp: payload.exp
        }

    }

}

module.exports = new JwtHelper();