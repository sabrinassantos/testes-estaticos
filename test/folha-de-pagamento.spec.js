import { describe, expect, it } from '@jest/globals';
import { somasHorasExtras, calculaDescontos } from '../index';

describe('Testes da folha depagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const espeerado = 2500;
    const retornado = somasHorasExtras(2000, 500);

    expect(retornado).toBe(espeerado);
  });

  it('Deve descontar o valor do salário', () => {
    const espeerado = 2300;
    const retornado = calculaDescontos(2500, 200);

    expect(retornado).toBe(espeerado);
  });
});
