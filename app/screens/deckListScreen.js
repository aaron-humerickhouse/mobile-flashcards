import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './../components/deckList'

class DeckListScreen extends React.Component {

  render() {
    return(
      <View>
        <Text>This is the deck list DeckListScreen</Text>
        <DeckList />
      </View>
    )
  }
}

export default DeckListScreen
