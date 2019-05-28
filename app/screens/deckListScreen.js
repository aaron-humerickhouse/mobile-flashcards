import React from 'react'
import { StyleSheet } from 'react-native';
import DeckList from './../components/deckList'
import {connect} from 'react-redux'
import { setHeader } from '../actions/header';

class DeckListScreen extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(setHeader('Deck List'))
  }

  render() {
    return(
      <DeckList />
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

export default connect()(DeckListScreen)
