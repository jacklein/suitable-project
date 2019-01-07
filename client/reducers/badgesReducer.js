import {
  FETCH_BADGES
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_BADGES:
      return action.payload;
    default:
      return state;
  }
}