const app = require('../../src/app')
const request = require('supertest')

describe('Função Dividir', () => {
    it('POST /dividir dois números positivos', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({num1: 80, num2: 2});

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: 40});
    })

    it('POST /dividir um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({num1: -8, num2: 2});
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: -4});
    })

    it('POST /dividir uma letra e um número negativo', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({num1: 'a', num2: -10});
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({message: "Favor informar somente números"});
    })
})