import React, { FC } from 'react';

import { StyledButton, StyledButtonTitle } from './button.styles';

import { ButtonPropsProtocol } from './button.types';

export const Button: FC<ButtonPropsProtocol> = ({
  onPress = () => {},
  buttonProps = {},
  buttonStyles = {},
  titleProps = {},
  titleStyles = {},
  title = '',
}) => {
  return (
    <StyledButton
      onPress={() => onPress()}
      {...buttonProps}
      style={buttonStyles}
    >
      <StyledButtonTitle style={titleStyles} {...titleProps}>
        {title}
      </StyledButtonTitle>
    </StyledButton>
  );
};
