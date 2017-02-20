import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../App';

describe('App component', () => {
  it('render without throwing an error', () => {
    expect(shallow(<App />).text()).toEqual('Hello, world');
  });

  it('selectable by class "foo"', () => {
    expect(shallow(<App />).is('.foo')).toBe(true);
  });

  it('mount in a full DOM', () => {
    expect(mount(<App />).find('.foo').length).toBe(1);
  });

  it('render to static HTML', () => {
    expect(render(<App />).text()).toEqual('Hello, world');
  });
});
