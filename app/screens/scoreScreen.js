import React from 'react'
import { StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import { H1, View, Button, Text } from 'native-base';

class ScoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Score',
  };

  navigateToDeck = () => {
    const {navigation, id} = this.props
    navigation.navigate({routeName: 'DeckScreen', params: {id: id}})
  }

  navigateToQuiz = () => {
    const {navigation, id} = this.props
    navigation.navigate({routeName: 'QuizScreen', params: {id: id, score: 0, index: 0}})
  }

  render() {
    const {score} = this.props
    return(
      <View style={styles.container}>
        <H1>You scored {(score * 100.0).toFixed(2)}%</H1>
        <View>
          <Button
            success
            onPress={() => this.navigateToDeck()}
            style={styles.button}
          >
            <Text>Back to Deck</Text>
          </Button>

          <Button
            info
            onPress={() => this.navigateToQuiz()}
            style={styles.button}
          >
            <Text>Restart Quiz</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    margin: 5,
    alignSelf: 'center'
  },
})

function mapStateToProps({}, props) {
  const {score, id} = props.navigation.state.params
  return {
    score: score,
    id: id
  }
}

export default connect(mapStateToProps)(ScoreScreen)
