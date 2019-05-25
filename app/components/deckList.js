import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';

class DeckList extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading, decks } = this.props
    return(
      <View>
        {
          loading && <ActivityIndicator size="large" />
        }
        {
          !loading && <Text>{JSON.stringify(decks, null, 2)}</Text>
        }
      </View>
    )
  }
}

function mapStateToProps({decks}) {
  console.log('mapStateToProps - decks:', decks)
  return {
    decks: decks,
    loading: Object.keys(decks).length === 0 ? true : false
  }
}

export default connect(mapStateToProps)(DeckList)
