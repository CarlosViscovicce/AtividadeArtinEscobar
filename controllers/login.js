const express = require("express")

const route = express.Router()

const Usuario = require("../models/usuarios")
const Produto = require("../models/produtos")

const jwt = require("jsonwebtoken")
require("dotenv/config")

route.post("/login", async (req, res) => {
    const { usuario, senha } = req.body
    var dados = await Usuario.findOne({ usuario: usuario })
    if (dados) {
        if (dados.senha === senha) 
        {
            const token = await jwt.sign({
                userId: dados._id,
                userNome: dados.nome
            }, process.env.CHAVE_SEGUR, { expiresIn: 86400 } );
            return res.send({ token })
        }
        else
            return res.send("A senha esta incorreta")
    }
    return res.send("Usuário não foi encontrado")
})

route.get("/lista/produtos", async (req, res) => {
    var lista = await Produto.find({ ativo: true })
    return res.send(lista)
})

module.exports = app => app.use("", route)
