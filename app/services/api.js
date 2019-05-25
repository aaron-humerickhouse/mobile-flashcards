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

// export async function setInitialData() {
//   try {
//     await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(INITIAL_DATA))
//     return INITIAL_DATA
//   } catch (error) {
//     // Error retrieving data
//     console.log(error.message);
//   }
// }

export function setInitialData() {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(INITIAL_DATA))
    .then((_) => {
      return new Promise((res,rej) => {
        res(INITIAL_DATA)
      })
    })
}

// export async function getDecks() {
//   try {
//     const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     return JSON.parse(decks)
//   } catch (error) {
//     // Error retrieving data
//     console.log(error.message);
//   }
// }

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      return decks
    })
}
