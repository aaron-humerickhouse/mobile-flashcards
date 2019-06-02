import React from 'react'
import { StyleSheet } from 'react-native';
import { Button, Container, H1, Text, View } from 'native-base'
import {connect} from 'react-redux'

class DeckScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('id', 'Deck'),
    };
  };

  questionLength = () => {
    const {deck} = this.props
    return deck.questions.length
  }

  navigateToNewQuestion = () => {
    const {navigation, id} = this.props
    navigation.navigate({routeName: 'NewQuestionScreen', params: {id: id}})
  }

  navigateToStartQuiz = () => {
    const {navigation, id} = this.props
    navigation.navigate({routeName: 'QuizScreen', params: {id: id, index: 0, score: 0}})
  }

  render() {
    const {deck} = this.props
    return(
      <Container style={styles.container}>
        <View style={[styles.centerText, styles.padded]}>
          <H1>{deck.title}</H1>
          <Text>
            {this.questionLength()} card{this.questionLength() != 1 ? 's' : ''}
          </Text>
        </View>
        <View style={styles.padded}>
          <Button light style={styles.button} onPress={() => this.navigateToNewQuestion()}>
            <Text>Add Card</Text>
          </Button>
          <Button primary style={styles.button} onPress={() => this.navigateToStartQuiz()}>
            <Text>Start Quiz</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  centerText: {
    alignItems: 'center',
  },
  padded: {
    padding: 50
  },
  button: {
    margin: 5
  }
})

function mapStateToProps({decks}, props) {
  return {
    deck: decks[props.navigation.state.params.id],
    id: props.navigation.state.params.id
  }
}

export default connect(mapStateToProps)(DeckScreen)
