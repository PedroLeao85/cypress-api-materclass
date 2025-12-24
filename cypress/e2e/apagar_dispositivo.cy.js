
describe('Apagar dispositivo', () => {

    it('Apagar dispositivo com sucesso' , () => {

        const payloadPost = {
                "name": "Aparelho Pedro_Teste123",
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

                const id = respostaPost.body.id

                    cy.request({
                        method : 'DELETE',
                        url : `/objects/${id}`
                    })
                    
                        .then((response) => {
                            expect(response.status).to.equal(200)
                        })
            })
    })
})