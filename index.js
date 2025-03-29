const express = require('express');
const { apiSomar, apiSubtrair, apiDivisao, apiMulti} = require('./api/operacoes');

const app = express();
const port = 9090;

app.use(express.json())

app.post('/somar', apiSomar);

app.post('/sub', apiSubtrair);

app.post('/divisao', apiDivisao);

app.post('/multi', apiMulti);

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port);
});