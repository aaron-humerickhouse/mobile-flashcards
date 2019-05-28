import React from 'react'
import { Container, Card, CardItem, Body, Text, Content, Header} from 'native-base';
import {StyleSheet} from 'react-native'
import { connect } from 'react-redux';

class Deck extends React.Component {
  render() {
    const { deck } = this.props

    return(
      <Card style={styles.card}>
        <CardItem>
          <Body style={styles['card-body']}>
            <Text>{deck['title']}</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

function mapStateToProps({decks}, {id}) {
  return {
    deck: decks[id]
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
  }
})

export default connect(mapStateToProps)(Deck)
