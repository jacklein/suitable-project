import {
  SET_INDEX
} from './types';

/**
 * Sets the index of the badge currently being looked at
 */
export const setIndex = index => async dispatch => {
  dispatch({ type: SET_INDEX, payload: index });
}