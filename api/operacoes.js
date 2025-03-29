const {somar, div, multi, sub} = require('../services/operacoes');

function apiSomar(req, res){
    const {num1, num2} = req.body
    const result = somar(num1, num2)
    
    res.status(200).send({ result })
};

function apiSubtrair(req, res){
    const {num1, num2} = req.body
    const result = sub(num1, num2)

    res.status(200).send({ result })
};

function apiDivisao(req, res){
    const {num1, num2} = req.body
    const result = div(num1, num2)

    res.status(200).send({ result })
};

function apiMulti(req, res){
    const {num1, num2} = req.body
    const result = multi(num1, num2)

    res.status(200).send({ result })
};

module.exports = { apiSomar, apiSubtrair, apiMulti, apiDivisao}