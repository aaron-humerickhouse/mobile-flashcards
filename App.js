import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import middleware from './app/middleware'
import { createAppContainer} from 'react-navigation';
import AppNavigator from './app/components/appNavigator';
import { Container } from 'native-base'

const store = createStore(rootReducer, middleware)

const AppContainer = createAppContainer(AppNavigator)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <AppContainer />
        </Container>
      </Provider>
    );
  }
}

export default App
