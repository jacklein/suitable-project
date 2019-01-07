import {
  FETCH_BADGES
} from './types';
import axios from 'axios';

export const fetchBadges = () => async dispatch => {
  const res = await axios.get('http://192.168.1.137:3001/v1/achievements');
  dispatch({ type: FETCH_BADGES, payload: res.data });
}