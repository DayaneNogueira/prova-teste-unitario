const app = require('../../src/app')

describe('Função Subtrair', () => {
    it('POST /subtrair dois números', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({num1: 5, num2: 2});

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: 3});
    })

    it('POST /subtrair um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({num1: 1, num2: -5});
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({result: 6});
    })

    it('POST /subtrair uma letra e um número', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({num1: 'a', num2: 8});
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({message: "Favor informar somente números"});
    })
})