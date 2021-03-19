import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import 'jest-styled-components/native';
import '@testing-library/jest-native/extend-expect';

import { List } from './List';

const mockedList = [
  { id: 1, name: 'um item' },
  { id: 2, name: 'dois itens' },
];

describe('List SUT ', () => {
  it('Should render', () => {
    render(<List />);
  });

  it('Should should update input text and an item list and clear the input ', async () => {
    const { queryAllByText } = render(<List list={mockedList} />);
    const texts = queryAllByText('um item');

    expect(texts).toHaveLength(1);
  });

  it('Should should call remove method with the specific item', async () => {
    const onRemoveItemMock = jest.fn();
    const { getByTestId } = render(
      <List list={mockedList} removeItem={onRemoveItemMock} />
    );

    const firstItem = getByTestId('remove_item_0');
    fireEvent.press(firstItem);

    expect(onRemoveItemMock).toHaveBeenCalledTimes(1);
    expect(onRemoveItemMock).toHaveBeenCalledWith({
      id: 1,
      name: 'um item',
    });
  });
});
