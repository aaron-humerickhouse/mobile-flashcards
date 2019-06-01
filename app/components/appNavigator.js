import { createStackNavigator } from "react-navigation";
import DeckListScreen from './../screens/deckListScreen'
import DeckScreen from './../screens/deckScreen'
import NewDeckScreen from '../screens/newDeckScreen'
import NewQuestionScreen from '../screens/newQuestionScreen'

const AppNavigator = createStackNavigator({
  DeckListScreen: {screen: DeckListScreen},
  DeckScreen: {screen: DeckScreen},
  NewDeckScreen: {screen: NewDeckScreen},
  NewQuestionScreen: {screen: NewQuestionScreen}
}, {
  initialRouteName: 'DeckListScreen'
});

export default AppNavigator
