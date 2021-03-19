import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLogined: false,
    };
  }

  inputChangeHandler = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  login = () => {
    if (
      this.state.username == 'Rodrigo' &&
      this.state.password == '123456'
    ) {
      this.setState({ isLogined: true });
    } else {
      this.setState({ isLogined: false });
    }
  };

  render() {
    return (
      <View
        style={LOCAL_STYLES.wrapper}
        testID="app-root"
        accessibilityLabel="app-root"
      >
        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput
            name="username"
            accessibilityLabel="username"
            style={LOCAL_STYLES.input}
            onChangeText={(text) =>
              this.inputChangeHandler(text, 'username')
            }
          />
        </View>

        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput
            name="password"
            accessibilityLabel="password"
            secureTextEntry={true}
            style={LOCAL_STYLES.input}
            onChangeText={(text) =>
              this.inputChangeHandler(text, 'password')
            }
          />
        </View>

        <TouchableHighlight
          style={LOCAL_STYLES.buttonContainer}
          accessibilityLabel="login"
          onPress={this.login}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableHighlight>

        <View style={LOCAL_STYLES.status}>
          <Text accessibilityLabel="loginstatus">
            {this.state.isLogined ? 'logado' : 'deslogado'}
          </Text>
        </View>
      </View>
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContainer: {
    height: 45,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'purple',
  },
  status: {
    position: 'absolute',
    bottom: 10,
  },
});
