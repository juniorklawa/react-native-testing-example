import React, { FC } from 'react';
import { View } from 'react-native';

import { TextInput, Button } from '../../components';
import { StyledRow } from './header.styles';

import { HeaderProps } from './header.types';

export const Header: FC<HeaderProps> = ({
  showValue = '',
  updateItem,
  clearList,
  onAdd,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <StyledRow>
        <TextInput
          inputProps={{
            accessibilityLabel: 'todo_input',
          }}
          value={showValue}
          onChange={(value) => updateItem(value)}
          styles={{ flex: 10 }}
          placeholder="Escreva algo !!!"
        />
        <Button
          title="&#128260;"
          onPress={() => clearList()}
          buttonProps={{
            activeOpacity: 0.8,
            testID: 'clearButton',
            accessibilityLabel: 'todo_clear_button',
          }}
          buttonStyles={{ flex: 2 }}
        />
      </StyledRow>

      <Button
        title="Adicionar à lista"
        onPress={() => onAdd(showValue)}
        buttonProps={{
          activeOpacity: 0.8,
          accessibilityLabel: 'todo_add_button',
        }}
        buttonStyles={{ marginVertical: 12 }}
      />
    </View>
  );
};
