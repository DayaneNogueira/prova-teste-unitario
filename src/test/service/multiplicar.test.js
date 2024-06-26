const ServicoExercicio = require('../../services/service')

describe('Teste Função Multiplicar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Multiplicar dois números positivos', () => {
        const result = servicoExercicio.Multiplicar(5, 5);
        expect(result).toBe(10);
    });

    it('Multiplicar dois números negativos', () => {
        const result = servicoExercicio.Multiplicar(-3, -3);
        expect(result).toBe(9);
    });

    it('Multiplicar um número por zero', () => {
        const result = () => servicoExercicio.Multiplicar(34, 0);
        expect(result).toBe(0);
    });

    it('Multiplicar uma letra e um número', () => {
        const result = () => servicoExercicio.Multiplicar('b', 7);
        expect(result).toThrowError("Favor informar somente números");
    });
});