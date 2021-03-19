import React, { useState, FC, useEffect } from 'react';
import { View } from 'react-native';

import { Header } from '../Header';
import { List } from '../List';

import { ListItemProps } from '../List/list.types';

import api from '../../services/api';

export const Todo: FC = React.memo(() => {
  const [item, setItem] = useState<string>('');
  const [list, setList] = useState<Array<ListItemProps>>([]);

  useEffect(() => {
    (async () => {
      const remoteList: Array<ListItemProps> = await api.getList();
      return setList(remoteList);
    })();
    return () => {};
  }, []);

  const AddItem = (value: string): void => {
    if (!value.length) return;

    list.push({ id: list.length + 1, name: value });
    setItem('');
  };

  const removeItem = (target: ListItemProps) => {
    if (!list?.length) return;

    const newItems = list.filter((item) => item.id !== target.id);
    setList(newItems);
  };

  return (
    <View style={{ flex: 1 }} accessibilityLabel="todo_container">
      <Header
        showValue={item}
        updateItem={(value) => setItem(value)}
        clearList={() => setList([])}
        onAdd={(value) => AddItem(value)}
      />

      <List list={list} removeItem={(item) => removeItem(item)} />
    </View>
  );
});
