const { describe, expect, it} = require('@jest/globals');
const ServicePessoa = require("../src/services/pessoa");

describe("Teste de pessoas", () => {
    const service = new ServicePessoa();

    it("Add um nome na lista", () => {
        const nome = "Lucas";
        service.Adicionar(nome);

        const nomes = service.PegarTodos();
        console.log(nomes)
        expect(nomes[nomes.length -1]).toBe(nome)
    })

    it("Update teste de pessoa", () => {
        const nome = "Ana"; 
        const index = 2
        service.Alterar(index, nome);

        const nomes = service.PegarTodos();
        console.log(nomes)

        expect(nomes[index]).toBe(nome)
    })

    it("Delete teste de pessoa", () => {
        const index = 3
        service.Deletar(index);
        const nome = service.PegarUm(index)
        console.log(nome)
        console.log(service.PegarTodos())
        expect(nome).toBeUndefined
    })
})