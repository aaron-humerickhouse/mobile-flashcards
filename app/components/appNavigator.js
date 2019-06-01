import { createStackNavigator } from "react-navigation";
import DeckListScreen from './../screens/deckListScreen'
import DeckScreen from './../screens/deckScreen'
import AddDeckScreen from './../screens/addDeckScreen'

const AppNavigator = createStackNavigator({
  DeckListScreen: {screen: DeckListScreen},
  DeckScreen: {screen: DeckScreen},
  AddDeckScreen: {screen: AddDeckScreen}
}, {
  initialRouteName: 'DeckListScreen'
});

export default AppNavigator
