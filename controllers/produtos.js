const express = require("express")
const Produto = require("../models/produtos")

const route = express.Router()

route.post("/produtos", async (req, res) => {

    await Produto.create(req.body, (err, ret) => {
        if (err)
            return res.send(err.message)
        return res.send(ret)
    })

})

route.put("/produtos", async (req, res) => {
    const { _id,  preco,nome,imagem,descricao, quantidade,  ativo } = req.body

    var dados = await Produto.findOne({ _id: _id })

    if (dados == null) {
        res.send("Produto não encontrado")
        return false
    }
    var notafinal = "Dados antigos: \n Nome: "+dados.nome+"\n Preco: "+dados.preco + "\n Imagem: " + dados.imagem + " \n Descricao:" + dados.descricao + " \n Quantidade:"+ dados.quantidade+"\n\n\n  Dados novos: \n Nome: " +nome+ "\n Preco: " +preco+ "\n Imagem: " +imagem+ "\n Descricao: " +descricao+ "\n Quantidade: " +quantidade+"\n\n Alteração realizado com sucesso!";
    await Produto.updateOne({ _id: _id }, { $set: { nome: nome, preco: preco, imagem: imagem, descricao: descricao, quantidade: quantidade }})
    res.send(notafinal)
})

route.delete("/produtos", async (req, res) => {
    const { _id } = req.body
    var dados = await Produto.findOne({ _id: _id })

    if (dados == null) {
        res.send("Produto não encontrado")
        return false
    }

    var mudanca = "O produto: "+dados.nome+" foi deletado!";
    var retorno = await Produto.updateOne({ _id: _id }, { $set: { ativo: false }})

    res.send(mudanca);
})

module.exports = app => app.use("/admin", route)