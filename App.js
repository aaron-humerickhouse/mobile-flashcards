import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import middleware from './app/middleware'
import DeckListScreen from './app/screens/deckListScreen'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(rootReducer, middleware)}>
        <View style={styles.container}>
          <DeckListScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
