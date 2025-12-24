
describe('Cadastrar dispositivos', () => {

    it('Cadastrar dispositivo com sucesso' , () => {


        const payload = {
                "name": "Aparelho Pedro_Teste123",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
        }

        cy.request({
            method: 'POST',
            url:'/objects',
            body: payload
        })
            .then((resposta) => {
                 expect(resposta.status).to.equal(200)
                 expect(resposta.body.id).not.to.empty
                 expect(resposta.body.createdAt).not.to.empty
                 expect(resposta.body.name).to.equal(payload.name)
                 expect(resposta.body.data.year).to.equal(payload.data.year)
            })

          
    })
})    
