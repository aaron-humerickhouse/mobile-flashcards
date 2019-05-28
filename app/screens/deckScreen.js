import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'native-base'

class DeckScreen extends React.Component {

  render() {
    return(
          <Text>This is a deck</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  }
})

export default DeckScreen
