import React from 'react'
import { Button, Card, CardItem, Body, Text} from 'native-base';
import {StyleSheet, Animated, View} from 'react-native'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


class DeckCard extends React.Component {
  state = {
    opacity: new Animated.Value(1)
  }

  navigateToDeckScreen = () => {
    const { navigation, id } = this.props
    const animationTime = 750
    const {opacity} = this.state

    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: animationTime
      }
    ).start();

    setTimeout(() => {
      navigation.dispatch(
        NavigationActions.navigate({ routeName: "DeckScreen", params: { id: id} })
      )
      opacity.setValue(1) //Reset in case of back navigation
    }, animationTime)
  }

  render() {
    const { deck } = this.props
    const { opacity } = this.state;

    return(
        <Card style={styles.card}>
                <Animated.View style={{ opacity: opacity }}>

          <CardItem button onPress={() => this.navigateToDeckScreen()}>
            <Body style={styles.cardBody}>
                <Text>{deck['title']}</Text>
            </Body>
          </CardItem>
          </Animated.View>
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
