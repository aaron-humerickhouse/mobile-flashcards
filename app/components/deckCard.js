import React from 'react'
import { Card, CardItem, Body, Text} from 'native-base';
import {StyleSheet, Animated, Easing} from 'react-native'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


class DeckCard extends React.Component {
  state = {
    scaleValue: new Animated.Value(0)
  }


  navigateToDeckScreen = () => {
    const { navigation, id } = this.props
    const animationTime = 250
    const {scaleValue} = this.state

    Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1,
        duration: animationTime,
        easing: Easing.easeOutBack
      }
    ).start();

    setTimeout(() => {
      navigation.dispatch(
        NavigationActions.navigate({ routeName: "DeckScreen", params: { id: id} })
      )
      scaleValue.setValue(0) //Reset in case of back navigation
    }, animationTime)
  }

  render() {
    const { deck } = this.props
    const { scaleValue } = this.state;

    const cardScale = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 5]
    });

    return(
        <Card style={styles.card}>
          <Animated.View style={[
            {
                transform: [
                    {scale: cardScale}
                ]
            }
          ]}>
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
