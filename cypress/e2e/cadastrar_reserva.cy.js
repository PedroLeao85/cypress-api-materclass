import { faker } from '@faker-js/faker';

const dados_cadastro = require('../fixtures/cadastro_reserva.json')

const gerador = require('../fixtures/reserva_utils')

describe('Cadastrar Reserva', () => {

    it('Cadastrar reserva com sucesso' , () => {

            cy.cadastrarReserva(dados_cadastro)
            .then((resposta) => {
                 expect(resposta.status).to.equal(200)
                 expect(resposta.body.bookingid).not.be.NaN
                 expect(resposta.body.booking.firstname).to.equal(dados_cadastro.firstname)
                 expect(resposta.body.booking.lastname).to.equal(dados_cadastro.lastname)
                 
            })

          
    })

    it('Cadastrar reserva com sucesso - Dados Aleatórios' , () => {

        // const payload_aleatorio = {
        //     "firstname": faker.person.firstName(),
        //     "lastname": faker.person.lastName(),
        //     "totalprice": Number(faker.finance.amount({dec:0})),
        //     "depositpaid": true,
        //     "bookingdates": {
        //     "checkin": "2025-12-17",
        //     "checkout": "2025-12-23"
        //     },
        //     "additionalneeds": "Breakfast"
        // }

        const payload_aleatorio = gerador.gerarReserva();
        
        cy.cadastrarReservaDadosAleatorios(payload_aleatorio)
            .then((resposta) => {
                 expect(resposta.status).to.equal(200)
                 expect(resposta.body.bookingid).not.be.NaN
                 expect(resposta.body.booking.firstname).to.equal(payload_aleatorio.firstname)
                 expect(resposta.body.booking.lastname).to.equal(payload_aleatorio.lastname)
                 expect(resposta.body.booking.totalprice).to.equal(payload_aleatorio.totalprice)
                 
            })

          
    })

    it('Cadastrar reserva sem enviar dados', () =>{
        cy.cadastrarReserva({}).then((resposta) => {
            expect(resposta.status).to.equal(500);
            
        })
    })

})    
