import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchBadges, updateProgress } from '../../../actions/BadgeActions';
import { achievements, updates } from '../../mockdata';
import { FETCH_BADGES, UPDATE_PROGRESS } from '../../../actions/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('BadgeActions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates a FETCH_BADGES action after successfully fetching achievements', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: achievements,
      });
    });

    const expectedActions = [
      { type: FETCH_BADGES, payload: achievements },
    ];

    const store = mockStore({ badges: [] });

    return store.dispatch(fetchBadges()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);

      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('creates an UPDATE_PROGRESS action after successfully fetching updated progresses', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: updates,
      });
    });

    const expectedActions = [
      { type: UPDATE_PROGRESS, payload: updates.updates },
    ];

    const store = mockStore({ badges: [] });

    return store.dispatch(updateProgress({ id: '123', callback: () => {} })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);

      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
