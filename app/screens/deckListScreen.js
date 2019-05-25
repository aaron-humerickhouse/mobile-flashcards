import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './../components/deckList'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class DeckListScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return(
      <View>
        <Text>This is the deck list DeckListScreen</Text>
        <DeckList />
      </View>
    )
  }
}

export default connect()(DeckListScreen)
