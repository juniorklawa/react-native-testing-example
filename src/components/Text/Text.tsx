import React from 'react';
import { StyledText } from './text.styles';

import { TextProps } from './text.types';

export const Text: React.FC<TextProps> = ({
  styles = {},
  value = '',
  accessibilityLabel,
}) => {
  return (
    <StyledText
      accessibilityLabel={accessibilityLabel}
      style={{ ...styles }}
    >
      {value}
    </StyledText>
  );
};
