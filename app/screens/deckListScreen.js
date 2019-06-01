import React from 'react'
import { StyleSheet, View } from 'react-native';
import DeckList from './../components/deckList'
import {connect} from 'react-redux'
import { setHeader } from '../actions/header';
import Header from './../components/header'
import { Container } from 'native-base';
import { handleInitialData} from './../actions/shared'

class DeckListScreen extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(setHeader('Deck List'))
    dispatch(handleInitialData())

  }

  render() {
    return(
      <Container>
        <Header />
        <DeckList navigation={this.props.navigation}/>
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

export default connect()(DeckListScreen)
