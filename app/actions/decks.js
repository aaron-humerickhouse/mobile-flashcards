import { getDecks as apiGetDecks } from '../services/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function handleGetDecks() {
  return (dispatch) => {
    return apiGetDecks()
      .then((decks) => {
        dispatch(getDecks(JSON.parse(decks)))
      })
  }
}
