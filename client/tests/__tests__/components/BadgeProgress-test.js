import React from 'react';
import { shallow } from 'enzyme';
import BadgeProgress from '../../../components/BadgeProgress';
import { achievements } from '../../mockdata';

describe('BadgeProgress component', () => {
  test('renders correctly', () => {
    const badge = achievements[0];
    const wrapper = shallow(
      <BadgeProgress progress={badge.details.progress} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ progress: 0.99 });
    expect(wrapper).toMatchSnapshot();
  });
});