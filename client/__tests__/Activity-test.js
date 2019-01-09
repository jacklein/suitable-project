import React from 'react';
import Activity from '../components/Activity';
import { activity } from '../mockdata';

import renderer from 'react-test-renderer';

test('Activity renders correctly', () => {
  const tree = renderer.create(<Activity activity={activity} onPress={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
})