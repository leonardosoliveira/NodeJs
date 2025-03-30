const {somar, div, multi, sub} = require('../services/operacoes');

function apiSomar(req, res){
    try{
        const {num1, num2} = req.body
        const result = somar(num1, num2)
        
        res.status(200).send({ result })
    }catch(error){
        res.status(500).send({ msg: error.message})
    }
}

function apiSubtrair(req, res){
    try{
        const {num1, num2} = req.body
        const result = sub(num1, num2)

        res.status(200).send({ result })
    }catch(error){
        res.status(500).send({msg: error.message})
    }
};

function apiDivisao(req, res){
    try{
        const {num1, num2} = req.body
        const result = div(num1, num2)

        res.status(200).send({ result })
    }catch(error){
        res.status(500).send({msg: error.message})
    }
};

function apiMulti(req, res){
    try{ 
        const {num1, num2} = req.body
        const result = multi(num1, num2)

        res.status(200).send({ result })
    }catch(error){
        res.status(500).send({msg: error.message})
    }
};

module.exports = { apiSomar, apiSubtrair, apiMulti, apiDivisao}