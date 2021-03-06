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
  return getDecks()
    .then(decks => {
      console.log('decks: ', decks)
      if(decks === null) {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(INITIAL_DATA))
        .then((_) => {
          return new Promise((res,rej) => {
            res(INITIAL_DATA)
          })
        })
      } else {
        return decks
      }
    })

    // //Debugging to reset async storage
    // return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(INITIAL_DATA))
    //   .then((_) => {
    //     return new Promise((res,rej) => {
    //       res(INITIAL_DATA)
    //     })
    //   })
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      return decks
    })
}

export function newDeck(key, deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
    .then((_) => {
      return deck
    })
}

export function updateQuestions(questions, id) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [id]: {
      questions: questions
    }
  }))
    .then((question) => {
      return question
  })
}
