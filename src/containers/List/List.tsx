import React, { FC } from 'react';
import { View } from 'react-native';

import { Text, Button } from '../../components';
import { StyledRow } from './list.styles';

import { ListProps } from './list.types';

export const List: FC<ListProps> = ({ list = [], removeItem }) => {
  return (
    <View style={{ margin: 12, flex: 1 }}>
      {!!list.length &&
        list.map((itemList, index: number) => {
          return (
            <StyledRow testID={`${index}`} key={index}>
              <Text
                value={itemList.name}
                styles={{ flex: 10 }}
                accessibilityLabel={`item_list_${index}`}
              />
              <Button
                title="&#10060;"
                onPress={() => removeItem(itemList)}
                buttonProps={{
                  testID: `remove_item_${index}`,
                  accessibilityLabel: `remove_item_${index}`,
                  activeOpacity: 0.8,
                }}
                buttonStyles={{
                  flex: 2,
                  borderWidth: 8,
                  borderColor: 'green',
                  borderRadius: 12,
                }}
              />
            </StyledRow>
          );
        })}
    </View>
  );
};
