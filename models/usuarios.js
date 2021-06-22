const moongose = require('../database/database')

const Usuarios = moongose.Schema({
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    }
})

const Usuario = moongose.model('usuarios', Usuarios)

module.exports = Usuario