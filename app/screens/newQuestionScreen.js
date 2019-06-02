import React from 'react'
import { StyleSheet } from 'react-native';
import { Textarea, Button, View, H1, Text } from 'native-base'
import {connect} from 'react-redux'
import { handleAddQuestion } from './../actions/decks'

class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Question'
  }

  state = {
    newQuestion: {
      text: '',
      error: null
    },
    newAnswer: {
      text: '',
      error: null
    }
  }

  buttonDisabled = () => {
    const { newQuestion, newAnswer } = this.state
    return newQuestion.text === '' || newAnswer.text === ''
  }

  handleFieldChange = (field, text) => {
    this.setState(() => {
      return {
        [field]: {
          text: text.trim(),
          error: null
        }
      }
    })
  }

  handleSubmit = () => {
    const {id, dispatch, navigation, deck} = this.props
    const {newQuestion, newAnswer} = this.state

    if(this.questionPresent()) {
      this.setState(() => {
        return {
          newQuestion: {
            text: '',
            error: 'Failed to save: question already included.'
          }
        }
      })
    } else {
      dispatch(handleAddQuestion({
        question: newQuestion.text,
        answer: newAnswer.text
      }, id, deck.questions))
      navigation.navigate('DeckScreen', { params: {id: id}})
    }
  }

  questionPresent = () => {
    const {deck} = this.props
    const { newQuestion } = this.state

    return deck.questions.filter(question => {
      return question.question.toLowerCase() === newQuestion.text.toLowerCase()
    }).length > 0
  }

  render() {
    const { newQuestion } = this.state

    return(
        <View  style={styles.container}>
          <H1>New Question</H1>

          <Textarea rowSpan={3} bordered
            placeholder='Question Text'
            onChangeText={text => this.handleFieldChange('newQuestion', text)}
            style={styles.input}
          />
          {newQuestion.error !== null && <Text style={styles.error}>
            {newQuestion.error}
          </Text>}

          <Textarea rowSpan={3} bordered
            placeholder='Answer Text'
            onChangeText={text => this.handleFieldChange('newAnswer', text)}
            style={styles.input}
          />

          <Button primary disabled={this.buttonDisabled()} style={styles.button} onPress={() => this.handleSubmit() }>
            <Text>Add Question</Text>
          </Button>
        </View>
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
  button: {
    margin: 5,
    alignSelf: 'center'
  },
  input: {
    width: '90%',
    margin: 5,
    marginTop: 15

  },
  error: {
    color: 'red'
  }
})

function mapStateToProps({decks}, props) {
  const id = props.navigation.state.params.id
  return {
    deck: decks[id],
    id: id
  }
}

export default connect(mapStateToProps)(NewDeckScreen)
