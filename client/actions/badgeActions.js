import {
  FETCH_BADGES, 
  UPDATE_PROGRESS
} from './types';
import axios from 'axios';

const URI = 'http://192.168.1.137:3001'

/**
 * res.data structure:
 * [
 * { 'id': 123, 'details': {...}, 'relationships': {...} },
 * { 'id': 456, 'details': {...}, 'relationships': {...} } 
 * ]
 */
export const fetchBadges = () => async dispatch => {
  const res = await axios.get(`${URI}/v1/achievements`);
  dispatch({ type: FETCH_BADGES, payload: res.data });
}


/**
 * res.data structure:
 * {
 * 'id': (id of completed activity),
 * 'updates': [{'achievementID': 456, 'progress': 0.5}, {...}, {...}]
 * }
 */
export const updateProgress = id => async dispatch => {
  const res = await axios.get(`${URI}/v1/activities/${id}/complete`);
  console.log(res.data.updates);
  dispatch({ type: UPDATE_PROGRESS, payload: res.data.updates });
}