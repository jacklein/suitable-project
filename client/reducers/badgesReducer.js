import {
  FETCH_BADGES,
  UPDATE_PROGRESS
} from '../actions/types';
import update from 'immutability-helper';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_BADGES:
      return action.payload
    case UPDATE_PROGRESS:
      return update(state, {[action.payload[0].achievementId]: {'details': {'progress': {$set: action.payload[0].progress}}}});
    default:
      return state;
  }
}