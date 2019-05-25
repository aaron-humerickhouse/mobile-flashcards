import { setInitialData } from '../services/api'
import { handleGetDecks } from '../actions/decks'

export function handleInitialData() {
  console.debug('in handleInitialData')

  return (dispatch) => {
    return setInitialData().then(decks => {
      console.log('in initial then - decks: ', decks)
      dispatch(handleGetDecks())
    })
  }
}
