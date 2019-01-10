import { setIndex } from '../../../actions/currentBadgeActions';
import { SET_INDEX } from '../../../actions/types';

describe('CurrentBadgeActions', () => {
  it('creates a SET_INDEX action', () => {
    expect(setIndex(1)).toEqual(
      {
        type: SET_INDEX,
        payload: 1
      }
    );

    expect(setIndex(1)).toMatchSnapshot();
  });
});