import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class DeckList extends React.Component {
  render() {
    const { loading } = this.props
    return(
      <View>
        {
          loading && <Text>Loading...</Text>
        }
        {
          !loading && <Text>{JSON.stringify(this.props.decks, null, 2)}</Text>
        }
      </View>
    )
  }
}

function mapStateToProps({decks}) {
  console.log('mapStateToProps decks:', decks)
  return {
    decks: decks,
    loading: Object.keys(decks).length === 0 ? true : false
  }
}
export default connect(mapStateToProps)(DeckList)
