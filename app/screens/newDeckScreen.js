import React from 'react'
import { StyleSheet } from 'react-native';
import { Button, View, H1, Text, Input, Icon, Form, Item } from 'native-base'
import {connect} from 'react-redux'
import { addDeck } from '../actions/decks';

class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  state = {
    newDeckTitle: '',
    error: null
  }

  buttonDisabled = () => {
    return this.state.newDeckTitle === ''
  }

  handleTitleChange = (text) => {
    this.setState(() => {
      return {
        newDeckTitle: text.trim(),
        error: null
      }
    })
  }

  handleSubmit = () => {
    const {dispatch, navigation, decks} = this.props
    const { newDeckTitle } = this.state

    if(this.nameTaken()) {
      this.setState(() => {
        return {
          error: 'Failed to save: deck name already taken.'
        }
      })
    } else {
      dispatch(addDeck(newDeckTitle))
      navigation.navigate('DeckListScreen')
    }
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
          <H1>New Deck</H1>
          <Item regular
            style={styles.input}
            error={error !== null}
          >
            <Input
              placeholder='Deck Title'
              onChangeText={text => this.handleTitleChange(text)}
            />
            {!!error && <Icon type="FontAwesome" name='times-circle' style={styles.error}/>}
          </Item>
          {!!error && <Text style={styles.error}>{error}</Text>}
          <Button primary disabled={this.buttonDisabled()} style={styles.button} onPress={() => this.handleSubmit() }>
            <Text>Add Deck</Text>
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

function mapStateToProps({decks}) {
  return {
    decks: decks
  }
}

export default connect(mapStateToProps)(NewDeckScreen)
