import {
  SET_INDEX
} from './types';

export const setIndex = index => async dispatch => {
  dispatch({ type: SET_INDEX, payload: index });
}