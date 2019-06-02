import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import middleware from './app/middleware'
import { createAppContainer} from 'react-navigation';
import AppNavigator from './app/components/appNavigator';
import { Container } from 'native-base'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Font } from "expo";

const store = createStore(rootReducer, middleware)

const AppContainer = createAppContainer(AppNavigator)
class App extends React.Component {
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <Provider store={store}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Container>
            <AppContainer />
          </Container>
        </TouchableWithoutFeedback>
      </Provider>
    );
  }
}

export default App
