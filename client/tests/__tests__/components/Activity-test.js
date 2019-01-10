import React from 'react';
import { shallow } from 'enzyme';
import Activity from '../../../components/Activity';
import { activity } from '../../mockdata';

describe('Activity component', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <Activity activity={activity} onPress={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});