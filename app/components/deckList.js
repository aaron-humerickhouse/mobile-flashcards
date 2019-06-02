import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Icon, Text, Content, View } from 'native-base'
import { connect } from 'react-redux'
import DeckCard from './deckCard'

class DeckList extends React.Component {
  navigateToAddDeck = () => {
    const { navigate } = this.props.navigation
    navigate({ routeName: "NewDeckScreen"})
  }

  render() {
    const { loading, decks } = this.props
    return(
      <Content>
        <View style={styles.container}>
          <Card style={styles.card}>
            <CardItem button onPress={ () => this.navigateToAddDeck()}>
              <Body style={styles.cardBody}>
                <Icon type='FontAwesome' name='plus-circle' style={{margin: 2}}/>
                <Text>Add Deck</Text>
              </Body>
            </CardItem>
          </Card>
          {
            loading && <ActivityIndicator size="large" />
          }
          {
            !loading && Object.keys(decks).map( id =>
              <DeckCard key={id} id={id} navigation={this.props.navigation}/>
            )
          }
        </View>
      </Content>
    )
  }
}

function mapStateToProps({decks}) {
  return {
    decks: decks,
    loading: Object.keys(decks).length === 0 ? true : false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'column'
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30
  },
  card: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10
  }
})

export default connect(mapStateToProps)(DeckList)
