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
        {/* <CardItem onPress={() => navigation.navigate(
          'DeckScreen',
          { id: id}
        )}> */}
        <CardItem>
          <Body style={styles['card-body']}>
          {/* <Button onPress={() => {
        Alert.alert('You tapped the button!');
      }}
      > */}

            <Button
              onPress={
                () => this.navigateToDeckScreen()
              }
            >
              <Text>{deck['title']}</Text>
            </Button>

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
  'card-body': {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  'card': {
    width: '90%',
    marginTop: 10,
    marginBottom: 10
  },
  'button': {
    color: '#000099'
  }
})

export default connect(mapStateToProps)(DeckCard)
