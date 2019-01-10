import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../../../components/Badge';
import { achievements } from '../../mockdata';

describe('Badge component', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <Badge badge={achievements[0]} index={0} onPress={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ index: 1 });
    expect(wrapper).toMatchSnapshot();
  });
});