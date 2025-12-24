
describe('Buscar dispositivos', () => {

    it('Buscar dispositivo existente', () => {
        
        cy.request({
            method: 'GET',
            url:'https://api.restful-api.dev/objects/3'
        })
            .then((resposta) => {
                // console.log("Minha resposta que esperei: " , resposta)
                expect(resposta.status).to.equal(200)
                expect(resposta.body.id).to.equal('3')
                expect(resposta.body.name).to.equal('Apple iPhone 12 Pro Max')
            })      
    })

     it.only('Buscar dispositivo inexistente', () => {
        
        cy.request({
            method: 'GET',
            url:'https://api.restful-api.dev/objects/xpto',
            failOnStatusCode: false
        })
            .then((resposta) => {
                // console.log("Minha resposta que esperei: " , resposta)
                expect(resposta.status).to.equal(404)
                expect(resposta.body.error).to.equal('Oject with id=xpto was not found.')
            })      
    })
})
