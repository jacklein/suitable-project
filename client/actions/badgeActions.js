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

  const badges = new Map();
  for (let badge of res.data) {
    badges.set(badge.id, badge);
  }

  dispatch({ type: FETCH_BADGES, payload: badges });
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
  dispatch({ type: UPDATE_PROGRESS, payload: res.data.updates });
}