import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, Container } from 'native-base'
import Header from './../components/header'
import { setHeader } from './../actions/header'
import {connect} from 'react-redux'

class DeckScreen extends React.Component {
  componentDidMount() {
    const { dispatch, deck} = this.props
    dispatch(setHeader(deck.title))
  }

  render() {
    const {deck} = this.props
    return(
      <Container>
        <Header />
        <Text>This is a deck with id {deck.title}</Text>
      </Container>
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

function mapStateToProps({decks}, props) {
  return {
    deck: decks[props.navigation.state.params.id]
  }
}

export default connect(mapStateToProps)(DeckScreen)
