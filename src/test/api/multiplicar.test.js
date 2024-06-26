const app = require('../../src/app')

describe('Função multiplicar', () => {
    it('POST /multiplicar dois números positivos', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({num1: 20, num2: 10});

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: 200});
    })

    it('POST /multiplicar um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({num1: -8, num2: 2});
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: -16});
    })

    it('POST /multiplicar uma letra e um número negativo', async () => {
        const response = await request(app)
            .send({num1: 'a', num2: -8});
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({message: "Favor informar somente números"});
    })
})