import React from 'react';
import { Text } from './Text';
import { render } from '@testing-library/react-native';
import 'jest-styled-components/native';

describe('Text SUT ', () => {
  it('Should render', () => {
    render(<Text />);
  });

  it('Should render with placeholder "Escreva algo !!!"', () => {
    const { getByText } = render(<Text value="Escreva algo !!!" />);
    expect(getByText('Escreva algo !!!')).toBeTruthy();
  });
});
