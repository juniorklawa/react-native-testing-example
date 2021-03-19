import React from 'react';
import { TextInput } from './Input';
import { render, fireEvent } from '@testing-library/react-native';
import 'jest-styled-components/native';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Input SUT ', () => {
  it('Should render', () => {
    render(<TextInput />);
  });

  it('Should render with placeholder "Escreva algo !!!"', () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Escreva algo !!!" />
    );
    expect(getByPlaceholderText('Escreva algo !!!')).toBeTruthy();
  });

  it('Should render call onChangeText with the text passed', async () => {
    const onEventMock = jest.fn();
    const CHANGE_TEXT = 'content';
    const { getByPlaceholderText } = render(
      <TextInput
        onChange={onEventMock}
        placeholder="Escreva algo !!!"
      />
    );

    const sut = getByPlaceholderText('Escreva algo !!!');
    expect(sut).toBeTruthy();

    fireEvent(sut, 'onChangeText', CHANGE_TEXT);
    expect(onEventMock).toHaveBeenCalledWith(CHANGE_TEXT);
  });

  it('Should render value with the text passed', async () => {
    const onEventMock = jest.fn();
    const INITIAL_TEXT = 'initial';
    const CHANGE_TEXT = 'content';
    const { getByTestId } = render(
      <TextInput onChange={onEventMock} value={INITIAL_TEXT} />
    );

    const sut = getByTestId('input');
    expect(sut.props.value).toBe(INITIAL_TEXT);

    fireEvent(sut, 'onChangeText', CHANGE_TEXT);
    expect(onEventMock).toHaveBeenCalledWith(CHANGE_TEXT);
  });
});
