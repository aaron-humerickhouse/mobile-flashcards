import { getDecks as apiGetDecks } from '../services/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function getDecks(decks) {
  console.log('action decks:', decks)
  return {
    type: GET_DECKS,
    decks
  }
}

export function handleGetDecks() {
  return (dispatch) => {
    return apiGetDecks()
      .then((decks) => {
        console.log('handleGetDecks in then - decks:', JSON.parse(decks))
        dispatch(getDecks(JSON.parse(decks)))
      })
  }
}
