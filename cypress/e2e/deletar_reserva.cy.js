import { faker } from '@faker-js/faker';
const gerador = require('../fixtures/reserva_utils')


describe('Deletar Reserva' , () => {

    let token

    before(() => {
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

    const payload_aleatorio = gerador.gerarReserva();
    it('Deletar Reserva válida' , () => {

       cy.cadastrarReservaDadosAleatorios(payload_aleatorio)
        .then((resposta) => {
            expect(resposta.status).to.equal(200);

            const id_reserva = resposta.body.bookingid;

            cy.deletarReserva(token,id_reserva)
            .then((resposta) => {
                 expect(resposta.status).to.equal(201);
                 expect(resposta.body).to.equal('Created')
                
            })
        })
    })
})

