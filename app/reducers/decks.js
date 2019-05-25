import { GET_DECKS } from './../actions/decks'

export default function decks(state = {}, action) {
  switch(action.type) {
    case GET_DECKS:
      const { decks } = action
      return {
          ...state,
          ...decks
      }
    default:
      return state
  }
}
