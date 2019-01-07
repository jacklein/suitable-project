import {
  FETCH_ACHIEVEMENTS
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ACHIEVEMENTS:
      return action.payload;
    default:
      return state;
  }
}