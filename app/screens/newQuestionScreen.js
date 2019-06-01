import React from 'react'
import { StyleSheet } from 'react-native';
import { Textarea, Button, View, H1, Text, Input, Icon, Form, Item } from 'native-base'
import {connect} from 'react-redux'

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
    // const {dispatch, navigation} = this.props
    // const { newDeckTitle } = this.state

    console.log('question: ', this.state.newQuestion.text)
    console.log('answer: ', this.state.newAnswer.text)
    // if(this.nameTaken()) {
    //   this.setState(() => {
    //     return {
    //       error: 'Failed to save: deck name already taken.'
    //     }
    //   })
    // } else {
    //   dispatch(addDeck(newDeckTitle))
    //   navigation.navigate('DeckScreen')
    // }
  }

  nameTaken = () => {
    const {decks} = this.props
    const { newDeckTitle } = this.state

    return Object.keys(decks).filter(key => {
      return key.toLowerCase() === newDeckTitle.toLowerCase()
    }).length > 0
  }

  render() {
    const { error } = this.state

    return(
        <View  style={styles.container}>
          <H1>New Question</H1>

          <Textarea rowSpan={3} bordered
            placeholder='Question Text'
            onChangeText={text => this.handleFieldChange('newQuestion', text)}
            style={styles.input}
          />

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

function mapStateToProps({}, props) {
  return {
    id: props.navigation.state.params.id
  }
}

export default connect(mapStateToProps)(NewDeckScreen)
