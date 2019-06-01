import React from 'react'
import { Button, Card, CardItem, Body, Text} from 'native-base';
import {StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


class DeckCard extends React.Component {
  navigateToDeckScreen = () => {
    const { navigation, id } = this.props
    navigation.dispatch(
      NavigationActions.navigate({ routeName: "DeckScreen", params: { id: id} })
    );
  }

  render() {
    const { deck } = this.props

    return(
      <Card style={styles.card}>
        <CardItem button onPress={() => this.navigateToDeckScreen()}>
          <Body style={styles.cardBody}>
              <Text>{deck['title']}</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

function mapStateToProps({decks}, {id}) {
  return {
    deck: decks[id],
  }
}

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  card: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10
  }
})

export default connect(mapStateToProps)(DeckCard)
