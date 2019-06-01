import React from 'react'
import { StyleSheet } from 'react-native';
import { Content, Button, View, H1, Text, Input, Form, Item } from 'native-base'
import {connect} from 'react-redux'

class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  state = {
    newDeckTitle: ''
  }

  buttonDisabled = () => {
    return this.state.newDeckTitle === ''
  }

  handleTitleChange = (text) => {
    this.setState(() => {
      return {
        newDeckTitle: text
      }
    })
  }

  render() {
    return(
      // <Content>
        <View  style={styles.container}>
          <H1>New Deck</H1>
          <Item regular style={styles.input}>
            <Input placeholder='Deck Title' onChangeText={text => this.handleTitleChange(text)} />
          </Item>
          <Button primary disabled={this.buttonDisabled()} style={styles.button}>
            <Text>Add Deck</Text>
          </Button>
        </View>
      // </Content>
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

  }
})

export default connect()(NewDeckScreen)
