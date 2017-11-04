import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

describe('Layout component', () => {
  it('mount in a full DOM', () => {
    const output = shallow(<Layout />);
    expect(output.hasClass('main')).toBeTruthy();
  });
});
