import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, Container } from 'native-base'
import {connect} from 'react-redux'

class DeckScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('id', 'Deck'),
    };
  };

  render() {
    const {deck} = this.props
    return(
      <Container>
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
