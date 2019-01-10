import reducer from '../../../reducers/currentBadgeReducer';
import * as types from '../../../actions/types';

describe('CurrentBadge reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  });

  it('should handle SET_INDEX', () => {
    expect(
      reducer([], {
        type: types.SET_INDEX,
        payload: 1
      })
    ).toEqual(1)
  });

});