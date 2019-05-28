import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import middleware from './app/middleware'
import DeckListScreen from './app/screens/deckListScreen'
import Header from './app/components/header'
import { Container, Content } from 'native-base'

const store = createStore(rootReducer, middleware)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container style={styles.container}>
          <Header />
          <Content>
            <DeckListScreen />
          </Content>
        </Container>
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
