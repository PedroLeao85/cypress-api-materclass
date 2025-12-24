
describe('Alterar dispositivo' , () => {

    it('Alterar dispositivo com sucesso', () => {

        const payloadPost = {
                "name": "Aparelho Pedro_Teste123",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
        }

        const payloadPut = {
                "name": "Aparelho Pedro_Alterado",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
        }
        
        cy.request({
            method : 'POST',
            url: '/objects',
            body: payloadPost

        })

            .then((respostaPost) => {
                expect(respostaPost.status).to.equal(200)
                expect(respostaPost.body.id).not.to.empty

                const id = respostaPost.body.id
                console.log('O id é: ' , id)

               
        cy.request({
            method: 'PUT',
            url: `/objects/${id}`,
            body: payloadPut,
            // failOnStatusCode: false
        })    

            .then((respostaPut) => {
                expect(respostaPut.status).to.equal(200)
                expect(respostaPut.body.name).to.equal(payloadPut.name)
            })
 
            })
        
              
    })
})