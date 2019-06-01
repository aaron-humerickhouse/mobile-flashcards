import { GET_DECKS, ADD_DECK, ADD_QUESTION } from './../actions/decks'

export default function decks(state = {}, action) {
  switch(action.type) {
    case GET_DECKS: {
      const { decks } = action
      return {
          ...state,
          ...decks
      }
    }
    case ADD_DECK: {
      const {deck} = action
      return {
        ...state,
        ...deck
      }
    }
    case ADD_QUESTION: {
      const { question, deck} = action
      console.log('state: ', state)
      console.log('state[deck]: ', state[deck])
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: state[deck].questions.concat(question)
        }
      }
    }
    default:
      return state
  }
}
