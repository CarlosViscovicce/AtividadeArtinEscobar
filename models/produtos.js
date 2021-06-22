const moongose = require('../database/database')

const Produtos = moongose.Schema({
    nome: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        default: true,
        required: false
    }
})

const Produto = moongose.model('produtos', Produtos)

module.exports = Produto