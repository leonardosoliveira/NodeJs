const ServicePessoa = require("../services/pessoa");

const service = new ServicePessoa();

class ControllerPessoa {

    PegarTodos(req, res) {
        try {
            const nomes = service.PegarTodos();
            res.status(200).json({ nomes })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    
    PegarUm(req, res) {
        try {
            const id = req.params.id
            const nome = service.PegarUm(id);
            res.status(200).json({ nome })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    
    Adicionar(req, res) {
        try {
            const nome = req.body.nome;
            service.Adicionar(nome);
            res.status(201).json()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome;
            service.Alterar(id, nome);
            res.status(200).json({ mensagem: "alterado com sucesso" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    
    Deletar(req, res) {
        try {
            const id = req.params.id
            service.Deletar(id);
            res.status(204).json()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = ControllerPessoa;