import React, { FC } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { Todo } from './containers';

const App: FC<React.Component> = () => {
  return (
    <ScrollView accessibilityLabel="app-root">
      <StatusBar barStyle="light-content" />
      <Todo />
    </ScrollView>
  );
};

export default App;
