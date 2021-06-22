const jwt = require("jsonwebtoken")
require("dotenv/config")

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    if (token == undefined)
        return res.send("Token não foi encontrado :c")
    const valor = token.split(" ")
    const [ baerer, valToken ] = valor
    if (!/^Bearer$/i.test(baerer))
        return res.send("Token mal formatdo  :c")  
    await jwt.verify( valToken, process.env.CHAVE_SEGUR, (erro, data) =>{
        if (erro)
            return res.send("Token inválido ou já expirou  :c")
        req.Id = data.userId
        req.nome = data.userNome
    })
    return next()
}