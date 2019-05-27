import React from 'react'
import { StyleSheet } from 'react-native';
import DeckList from './../components/deckList'
import { Container, Title, Left, Right, Body, Header, Content } from 'native-base'

class DeckListScreen extends React.Component {

  render() {
    return(
      <Container style={styles.container}>
        <Header>
          <Left/>
          <Body>
            <Title>Deck List</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <DeckList />
        </Content>
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

export default DeckListScreen
