import { combineReducers } from 'redux';
import decks from './decks'
import header from './header'

export default combineReducers({
  decks,
  header
})
