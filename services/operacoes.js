const { error } = require("console")

function validNumber(n1, n2){
    if(isNaN(n1) || isNaN(n2)){
        throw new Error('Favor informar somente numeros'); 
    }
}

function validDivZero(n1, n2){
    if(n1 == 0 || n2 == 0){
        throw new Error('Não é possivel dividir por zero')
    }
}

function somar(n1, n2){
    validNumber(n1, n2)
    return n1 + n2
};

function sub(n1, n2){
    validNumber(n1, n2)
    return n1 - n2
};

function div(n1, n2){
    validNumber(n1, n2)
    validDivZero(n1,n2)
    return n1 / n2
};

function multi(n1, n2){
    validNumber(n1, n2)
    return n1 * n2
};

module.exports = {somar, sub, div, multi}