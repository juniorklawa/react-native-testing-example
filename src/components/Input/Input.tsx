import React from 'react';
import { StyledTextInput } from './input.styles';

import { InputProps } from './input.types';

export const TextInput: React.FC<InputProps> = ({
  styles = {},
  value = '',
  placeholder = '',
  onChange = () => {},
  editable = true,
  inputProps,
}) => {
  return (
    <StyledTextInput
      testID="input"
      onChangeText={(text) => onChange(text)}
      value={value}
      placeholder={placeholder}
      style={styles}
      editable={editable}
      {...inputProps}
    />
  );
};
