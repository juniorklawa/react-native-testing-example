import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('TextInput ', () => {
  it('Should render', () => {
    render(<App />);
  });
});
