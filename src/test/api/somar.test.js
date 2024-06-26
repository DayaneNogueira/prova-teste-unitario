const app = require('../../src/app')
const request = require('supertest')

describe('Função Somar', () => {
    it('POST /somar dois números positivos', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({num1: 3, num2: 7});

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: 10});
    })

    it('POST /somar um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({num1: 1, num2: -2});
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: -1});
    })

    it('POST /somar uma letra e um número negativo', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 'a', num2: -2 });
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Favor informar somente números" });
    })
})