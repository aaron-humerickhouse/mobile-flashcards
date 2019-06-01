import { getDecks as apiGetDecks, newDeck } from '../services/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

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

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck: {
      [deck]: {
        title: deck,
        questions: []
      }
    }
  }
}

export function handleAddDeck() {
  return (dispatch) => {
    return newDeck(deck)
      .then((deck) => {
        dispatch(addDeck(JSON.parse(deck)))
      })
  }
}

export function addQuestion(question, id) {
  return {
    type: ADD_QUESTION,
    question: question,
    deck: id
  }
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return newQuestion(question)
      .then((question) => {
        dispatch(addQuestion(JSON.parse(question)))
      })
  }
}
