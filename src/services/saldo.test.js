import api from './api';
import { buscaSaldo, atualizaSaldo } from './saldo';

jest.mock('./api');

const mockSaldo = {
  valor: '1000'
};

const mockRequisicao = (retorno) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

const mockRequisicaoPut = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve({
        status: 201,
      });
    }, 200);
  });
};

describe('Requisição para API', () => {
  test('Deve retornar o saldo da conta', async () => {
    api.get.mockImplementation(() => mockRequisicao(mockSaldo));

    const saldo = await buscaSaldo();
    expect(saldo).toEqual(mockSaldo.valor);

    expect(api.get).toHaveBeenCalledWith('/saldo');
    expect(api.get).toHaveBeenCalledTimes(1);
  });

  test('Deve retornar o saldo de 1000', async () => {
    api.get.mockImplementation(() => mockRequisicao(mockSaldo));

    const saldo = await buscaSaldo();
    expect(saldo).toEqual("1000");

    expect(api.get).toHaveBeenCalledWith('/saldo');
    expect(api.get).toHaveBeenCalledTimes(1);
  });
});
