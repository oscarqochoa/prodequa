const { Schema, model } = require('mongoose')

const User = new Schema({
    correo: String, 
    clave: String,
    nombreusuario: String,
    dni: Number,
})

module.exports = model('user', User)