const dados_cadastro = require('../fixtures/cadastro_reserva.json')
const dados_cadastro_alterado = require('../fixtures/update_reserva.json')

describe('Alterar reserva', () =>{

    let token
    //hooks
    //antes de todos os cenários
    before(() => {
        console.log('Chamado antes de tudo.')
        cy.request({
            method: 'POST',
            url:'https://restful-booker.herokuapp.com/auth',
            body:{
                "username" : "admin",
                "password" : "password123"
            },
        })
            .then((resposta) => {
                 token = resposta.body.token
            })
        
    })
    //antes de cada cenário
    beforeEach(() => {
        console.log('Chamado antes de cada cenário.')
    })

    //depois de todos os cenários
    after(() =>{
        console.log('Chamado depois de tudo.')
    })

    //depois de cada cenário
    afterEach(() => {
        console.log('Chamado depois de cada cenário.')
    })

    it('Alterar reserva', () => {

        cy.cadastrarReserva(dados_cadastro)
            .then((resposta) => {
                 expect(resposta.status).to.equal(200)
                 
                 const id_reserva = resposta.body.bookingid
                 

            cy.alterarReserva(token,id_reserva,dados_cadastro_alterado)    
            .then((resposta) => {
                 expect(resposta.status).to.equal(200)
                 expect(resposta.body.firstname).to.equal(dados_cadastro_alterado.firstname)
                 expect(resposta.body.lastname).to.equal(dados_cadastro_alterado.lastname)


                 
            })
        })
    })
})    