const ServicoExercicio = require('../../services/service')

describe('Teste Função Subtrair', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Subtrair dois números positivos', () => {
        const result = servicoExercicio.Subtrair(5, 5);
        expect(result).toBe(0);
    });

    it('Subtrair uma letra e um número', () => {
        const result = () => servicoExercicio.Subtrair('a', 17);
        expect(result).toThrowError("Favor informar somente números");
    });

    it('Subtrair número negativo e um positivo', () => {
        const result = servicoExercicio.Subtrair(-7, 2);
        expect(result).toBe(-9);
    });

    it('Subtrair número positivo com zero', () => {
        const result = () => servicoExercicio.Subtrair(9, 0);
        expect(result).toBe(9);
    });
});