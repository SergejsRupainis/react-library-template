import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Check button', () => {
  test('it works', () => {
    const wrapper = shallow(<Button text="Title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
