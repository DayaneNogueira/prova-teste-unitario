const ServicoExercicio = require('../../services/service')

describe('Teste Função Dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Dividir dois números negativos', () => {
        const result = servicoExercicio.Dividir(-100, -10);
        expect(result).toBe(10);
    });

    it('Dividir número positivo por zero', () => {
        const result = servicoExercicio.Dividir(200, 0);
        expect(result).toBe(0);
    });

    it('Dividir o zero por número positivo', () => {
        const result = servicoExercicio.Dividir(0, 50);
        expect(result).toBe(0);
    });

    it('Dividir uma letra e um número positivo', () => {
        const result = () => servicoExercicio.Dividir('a', 20);
        expect(result).toThrowError("Favor informar somente números");
    });

    it('Dividir um número positivo e uma letra', () => {
        const result = () => servicoExercicio.Dividir(20, 'a');
        expect(result).toThrowError("Favor informar somente números");
    });
});