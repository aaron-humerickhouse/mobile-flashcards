import { createStackNavigator } from "react-navigation";
import DeckListScreen from './../screens/deckListScreen'
import DeckScreen from './../screens/deckScreen'
import NewDeckScreen from '../screens/newDeckScreen'

const AppNavigator = createStackNavigator({
  DeckListScreen: {screen: DeckListScreen},
  DeckScreen: {screen: DeckScreen},
  NewDeckScreen: {screen: NewDeckScreen}
}, {
  initialRouteName: 'DeckListScreen'
});

export default AppNavigator
