// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('cadastrarReserva', (dados) => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        failOnStatusCode: false,
        body: dados,
    })
})

Cypress.Commands.add('cadastrarReservaDadosAleatorios', (aleatorio) => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        failOnStatusCode: false,
        body: aleatorio,
    })
})

Cypress.Commands.add('alterarReserva', (token, id_reserva, dados_cadastro_alterado) => {
    cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${id_reserva}`,
        body: dados_cadastro_alterado,
        headers: {
            Cookie: `token=${token}`
        }
    })
})

Cypress.Commands.add('deletarReserva', (token, id_reserva) => {
    cy.request({
        method: 'DELETE',
        url: `https://restful-booker.herokuapp.com/booking/${id_reserva}`,
        headers: {
            Cookie: `token=${token}`
        }
    })
})
