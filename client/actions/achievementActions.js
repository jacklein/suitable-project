import {
  FETCH_ACHIEVEMENTS
} from './types';
import axios from 'axios';

export const fetchAchievements = () => async dispatch => {
  const res = await axios.get('http://192.168.1.137:3001/v1/achievements');
  dispatch({ type: FETCH_ACHIEVEMENTS, payload: res.data });
}