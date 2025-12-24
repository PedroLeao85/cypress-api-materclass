import { faker } from '@faker-js/faker';

export function gerarReserva(){
    return{
        "firstname": faker.person.firstName(),
            "lastname": faker.person.lastName(),
            "totalprice": Number(faker.finance.amount({dec:0})),
            "depositpaid": true,
            "bookingdates": {
            "checkin": "2025-12-17",
            "checkout": "2025-12-23"
            },
            "additionalneeds": "Breakfast"
    }
}