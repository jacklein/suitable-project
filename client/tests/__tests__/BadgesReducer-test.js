import reducer from '../../reducers/badgesReducer';
import * as types from '../../actions/types';
import { achievements, updates, updatedAchievements } from '../mockdata';

describe('Badges reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle FETCH_BADGES', () => {
    expect(
      reducer([], {
        type: types.FETCH_BADGES,
        payload: achievements
      })
    ).toEqual(achievements)
  });

  it('should handle UPDATE_PROGRESS', () => {
    expect(
      reducer(achievements, {
        type: types.UPDATE_PROGRESS,
        payload: updates
      })
    ).toEqual(updatedAchievements)
  });

});