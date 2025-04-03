const express = require("express");
const app = express();
const routers = require("./src/routes/pessoa")

app.use(express.json());
app.use(routers);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});