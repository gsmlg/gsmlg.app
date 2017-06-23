import {
LOOKUP,
LOOKUP_DONE,
LOOKUP_FAIL,
CHANGE_DOMAIN
} from '../actions/dns';

export default (state = {
  domain: '',
  address: '',
  isLooking: false
}, action) => {
  switch(action.type) {
    case CHANGE_DOMAIN:
      return {...state, domain: action.value.toUpperCase()};
    case LOOKUP:
      return {...state, isLooking: true};
    case LOOKUP_DONE:
      return {...state, address: action.address, error: null, isLooking: false};
    case LOOKUP_FAIL:
      return {...state, address: '', error: action.error, isLooking: false};
    default:
      return state;
  }
}
