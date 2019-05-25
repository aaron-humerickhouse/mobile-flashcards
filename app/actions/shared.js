import { setInitialData } from '../services/api'
import { handleGetDecks } from '../actions/decks'

export function handleInitialData() {
  return (dispatch) => {
    return setInitialData().then(decks => {
      dispatch(handleGetDecks())
    })
  }
}
