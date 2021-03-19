import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import 'jest-styled-components/native';

import { Header } from './Header';

describe('Header SUT ', () => {
  it('Should render', () => {
    render(<Header />);
  });

  it('Should render with placeholder "Escreva algo !!!"', () => {
    const { getByPlaceholderText } = render(
      <Header placeholder="Escreva algo !!!" />
    );
    expect(getByPlaceholderText('Escreva algo !!!')).toBeTruthy();
  });

  it('Should render with the icon 🔄', () => {
    const { getByTestId } = render(<Header />);
    const sut = getByTestId('clearButton');
    expect(sut).toBeTruthy();
  });

  it('Should clear the list  🔄', () => {
    const clearListMock = jest.fn();
    const { getByTestId } = render(
      <Header clearList={clearListMock} />
    );

    const sut = getByTestId('clearButton');
    expect(sut).toBeTruthy();

    fireEvent.press(sut);
    expect(clearListMock).toHaveBeenCalled();
  });

  it('Should render with title "Adicionar à lista"', () => {
    const { getByText } = render(<Header />);
    const sut = getByText('Adicionar à lista');
    expect(sut).toBeTruthy();
    expect(sut).toHaveStyleRule('color', '#fff');
  });
});
