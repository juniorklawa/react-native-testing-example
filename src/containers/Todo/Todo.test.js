import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';
import 'jest-styled-components/native';

import { Todo } from './Todo';
import api from '../../services/api';
import { act } from 'react-test-renderer';

jest.mock('../../services/api');

describe('Todo SUT ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render', () => {
    render(<Todo />);
  });

  it('Should render with placeholder "Escreva algo !!!"', () => {
    const { getByPlaceholderText } = render(
      <Todo placeholder="Escreva algo !!!" />
    );
    expect(getByPlaceholderText('Escreva algo !!!')).toBeTruthy();
  });

  it('Should render with title "Simples Botão"', () => {
    const { getByTestId } = render(<Todo />);
    const sut = getByTestId('clearButton');
    expect(sut).toBeTruthy();
  });

  it('Should render with title "Adicionar à lista"', () => {
    const { getByText } = render(<Todo />);
    const sut = getByText('Adicionar à lista');
    expect(sut).toBeTruthy();
    expect(sut).toHaveStyleRule('color', '#fff');
  });

  it('Should should add items to the list after the press event', async () => {
    const INITIAL_TEXT = 'changed_text';
    const sut = render(<Todo placeholder="Escreva algo !!!" />);

    const inputSut = sut.getByPlaceholderText('Escreva algo !!!');
    fireEvent.changeText(inputSut, INITIAL_TEXT);

    const addSut = sut.getByText('Adicionar à lista');
    fireEvent.press(addSut);

    const first = sut.getByText(INITIAL_TEXT);
    fireEvent.changeText(inputSut, 'mais um');
    fireEvent.press(addSut);

    const second = sut.getByText('mais um');

    expect(first).toBeTruthy();
    expect(second).toBeTruthy();
  });

  // eslint-disable-next-line jest/no-focused-tests
  it('Should should render call api and load two itens on the list', async () => {
    const mockedList = [
      { id: 1, name: 'mocked api - item 1' },
      { id: 2, name: 'mocked api - item 2' },
    ];

    api.getList.mockImplementation(() => Promise.resolve(mockedList));
    const loadSpy = jest.spyOn(api, 'getList');
    const { queryAllByText, getByTestId } = render(<Todo />);

    // Espera para evitar erros devido à atualização do componente pelo useEffect
    act(() => {
      expect(loadSpy).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      // Método 1
      const items = queryAllByText(/mocked api - item /i);
      expect(items).toHaveLength(2);

      // Método 2
      const firstItem = getByTestId('remove_item_0');
      const secondItem = getByTestId('remove_item_1');
      expect(firstItem).toBeTruthy();
      expect(secondItem).toBeTruthy();
    });
  });
});
