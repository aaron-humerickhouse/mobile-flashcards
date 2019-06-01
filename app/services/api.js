import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'
const INITIAL_DATA = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function setInitialData() {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(INITIAL_DATA))
    .then((_) => {
      return new Promise((res,rej) => {
        res(INITIAL_DATA)
      })
    })
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      return decks
    })
}

export function newDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    deck
  }))
    .then((deck) => {
      return deck
    })
}
