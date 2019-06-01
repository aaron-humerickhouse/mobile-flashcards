import { createStackNavigator } from "react-navigation";
import DeckListScreen from './../screens/deckListScreen'
import DeckScreen from './../screens/deckScreen'

const AppNavigator = createStackNavigator({
  DeckListScreen: {screen: DeckListScreen},
  DeckScreen: {screen: DeckScreen},
}, {
  initialRouteName: 'DeckListScreen'
});

export default AppNavigator
