import { GET_DECKS, ADD_DECK } from './../actions/decks'

export default function decks(state = {}, action) {
  switch(action.type) {
    case GET_DECKS:
      const { decks } = action
      return {
          ...state,
          ...decks
      }
    case ADD_DECK:
      const {deck} = action
      return {
        ...state,
        ...deck
      }
    default:
      return state
  }
}
