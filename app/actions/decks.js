import { getDecks as apiGetDecks, newDeck, updateQuestions} from '../services/api'

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
    deck
  }
}

export function handleAddDeck(title) {
  deck = {
    title: title,
    questions: []
  }

  return (dispatch) => {
    return newDeck(title, deck)
      .then((deck) => {
        dispatch(addDeck(deck))
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

export function handleAddQuestion(question, id, questions) {
  questions = questions.concat(question)
  return (dispatch) => {
    return updateQuestions(questions, id)
      .then((_) => {
        dispatch(addQuestion(question, id))
      })
  }
}
