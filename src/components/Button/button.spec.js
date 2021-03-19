import React from 'react';
import { Button } from './Button';
import { render, fireEvent } from '@testing-library/react-native';
import 'jest-styled-components/native';

describe('BUTTON SUT', () => {
  it('Should render', () => {
    render(<Button />);
  });

  it('Should render with title "Simples Botão"', () => {
    const { getByText } = render(<Button title="Simples Botão" />);
    const sut = getByText('Simples Botão');
    expect(sut).toBeTruthy();
  });

  it('Should render with title "Simples Botão" and have white text color', () => {
    const { getByText } = render(<Button title="Simples Botão" />);
    const sut = getByText('Simples Botão');
    expect(sut).toHaveStyleRule('color', '#fff');
  });

  it('Should render with red title', async () => {
    const { getByText } = render(
      <Button
        title="red title button"
        titleProps={{
          style: {
            color: 'red',
          },
        }}
      />
    );

    const sut = getByText('red title button');
    expect(sut).toHaveStyleRule('color', 'red');
  });

  it('Should call onPress', async () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="red title button" onPress={onPressMock} />
    );

    const sut = getByText('red title button');

    fireEvent.press(sut);
    expect(onPressMock).toHaveBeenCalled();
  });
});
