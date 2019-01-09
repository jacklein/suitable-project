import React from 'react';
import Badge from '../../components/Badge';
import { achievements } from '../mockdata';

import renderer from 'react-test-renderer';

test('Badge renders correctly', () => {
  const tree = renderer.create(<Badge badge={achievements[0]} onPress={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
})