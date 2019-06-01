import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import DeckCard from './deckCard'

class DeckList extends React.Component {
  render() {
    const { loading, decks } = this.props
    return(
      <Container style={styles.container}>
        {
          loading && <ActivityIndicator size="large" />
        }
        {
          !loading && Object.keys(decks).map( id => <DeckCard key={id} id={id} navigation={this.props.navigation}/>)
        }
      </Container>
    )
  }
}

function mapStateToProps({decks}) {
  return {
    decks: decks,
    loading: Object.keys(decks).length === 0 ? true : false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20
  }
})

export default connect(mapStateToProps)(DeckList)
