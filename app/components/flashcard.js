import React from 'react'
import { Text, Card, CardItem, Body } from 'native-base'
import { StyleSheet, View } from 'react-native';

class Flashcard extends React.Component {
  render() {
    const {question, answer, showAnswer} = this.props

    return(
      <View>
        {!showAnswer && <Card style={styles.card}>
          <CardItem  style={styles.question}>
            <Body style={styles.cardBody}>
              <Text style={[styles.label, {color: 'black'}]}>{question}</Text>
            </Body>
          </CardItem>
        </Card>}

        {showAnswer && <Card style={styles.card}>
          <CardItem style={styles.answer}>
            <Body style={styles.cardBody}>
              <Text style={styles.label}>{answer}</Text>
            </Body>
          </CardItem>
        </Card>}
     </View>
    )
  }
}

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  card: {
    height: 300,
    width: 300,
  },
  question: {
    backgroundColor: '#f4f4f4',
  },
  answer: {
    backgroundColor: '#62B1F6',
  },
  label: {
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

export default Flashcard
