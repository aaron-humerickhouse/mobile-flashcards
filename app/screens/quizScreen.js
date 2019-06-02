import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Content, Text, Button, Card, CardItem, Body } from 'native-base'
import {connect} from 'react-redux'
import Flashcard from './../components/flashcard'

class QuizScreen extends React.Component {
  static navigationOptions = {
    title: 'Quiz',
  };

  state = {
    showAnswer: false
  }

  handleAnswer = (correct) => {
    const { navigation, id, score, index, totalQuestions } = this.props
    newScore = correct ? score + 1 : score
    if(index+1 === totalQuestions) {
      navigation.navigate({ routeName: 'ScoreScreen', params: {id: id, score: newScore/totalQuestions}})
    } else {
      navigation.navigate({ routeName: 'QuizScreen', params: {
        id: id,
        score: newScore,
        index: index+1
      }})
    }
  }

  toggleCard = () => {
    this.setState((state) => {
      return {
        showAnswer: !state.showAnswer
      }
    })
  }

  render() {
    const { question, index, totalQuestions } = this.props
    const { showAnswer } = this.state
    return(
      <Content>
        <View style={styles.container}>
          <View style={{marginTop: 20}}>
            <Text >Question {index+1} of {totalQuestions}</Text>

            <Flashcard question={question.question} answer={question.answer} showAnswer={showAnswer} />

            <Button info style={[styles.button, {marginTop: 25}]} onPress={() => this.toggleCard()}>
              <Text>Flip Card</Text>
            </Button>
          </View>

          <View style={{marginTop: 50}}>
            <Button success style={styles.button} onPress={() => this.handleAnswer(true)}>
              <Text>Correct</Text>
            </Button>

            <Button danger style={styles.button} onPress={() => this.handleAnswer(false)}>
              <Text>Incorrect</Text>
            </Button>
          </View>
        </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: 5,
    alignSelf: 'center'
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  card: {
    height: 300,
    width: 300,
  },
  question: {
    backgroundColor: '#f4f4f4',
  },
  answer: {
    backgroundColor: '#62B1F6',
  },
  label: {
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

function mapStateToProps({decks}, props) {
  const {id, index, score} = props.navigation.state.params

  return {
    id: id,
    index: index,
    score: score,
    question: decks[id].questions[index],
    totalQuestions: decks[id].questions.length
  }
}
export default connect(mapStateToProps)(QuizScreen)
