import { createStackNavigator } from "react-navigation";
import DeckListScreen from './../screens/deckListScreen'
import DeckScreen from './../screens/deckScreen'
import NewDeckScreen from '../screens/newDeckScreen'
import NewQuestionScreen from '../screens/newQuestionScreen'
import QuizScreen from '../screens/quizScreen'
import ScoreScreen from '../screens/scoreScreen'

const AppNavigator = createStackNavigator({
  DeckListScreen: {screen: DeckListScreen},
  DeckScreen: {screen: DeckScreen},
  NewDeckScreen: {screen: NewDeckScreen},
  NewQuestionScreen: {screen: NewQuestionScreen},
  QuizScreen: {screen: QuizScreen},
  ScoreScreen: {screen: ScoreScreen}
}, {
  initialRouteName: 'DeckListScreen'
});

export default AppNavigator
