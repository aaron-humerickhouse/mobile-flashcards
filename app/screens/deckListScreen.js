import React from 'react'
import { StyleSheet } from 'react-native';
import DeckList from './../components/deckList'
import {connect} from 'react-redux'
import { handleInitialData} from './../actions/shared'
import { clearLocalNotification } from '../utils/notifications';

class DeckListScreen extends React.Component {
  static navigationOptions = {
    title: 'Deck List',
  };

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
    clearLocalNotification()
  }

  render() {
    return(
      <DeckList navigation={this.props.navigation}/>
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
