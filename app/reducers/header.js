import { SET_HEADER } from '../actions/header'

export default function headers(state = {}, action) {
  switch(action.type) {
    case SET_HEADER:
      const { header } = action
      console.log('reducer header: ', JSON.stringify(header,null,2))
      return {
        ...state,
        header
         //TODO: Figure out why I can't add a string to this
      }
    default:
      return state
  }
}
