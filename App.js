import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import middleware from './app/middleware'
import DeckListScreen from './app/screens/deckListScreen'
import Header from './app/components/header'
import { Container, Content } from 'native-base'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import DeckScreen from './app/screens/deckScreen';
import AppNavigator from './app/components/appNavigator';

const store = createStore(rootReducer, middleware)

const AppContainer = createAppContainer(AppNavigator)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default App
