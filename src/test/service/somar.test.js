const ServicoExercicio = require('../../services/service')

describe('Teste Função Somar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Somar dois números positivos', () => {
        const result = servicoExercicio.Somar(2, 3);
        expect(result).toBe(5);
    });

    it('Somar uma letra e um número', () => {
        const result = () => servicoExercicio.Somar('a', 3);
        expect(result).toThrowError('Favor informar somente números');
    });

    it('Somar número negativo e positivo', () => {
        const result = servicoExercicio.Somar(-3, 10);
        expect(result).toBe(7);
    });

    it('Somar número negativo com zero', () => {
        const result = () => servicoExercicio.Somar(-9, 0);
        expect(result).toBe(-9);
    });
});