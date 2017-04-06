import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Layout from '../Layout';

describe('Layout component', () => {
  /*
  it('selectable by class "main"', () => {
    expect(shallow(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    ).find('.main').length).toBe(1);
  });
  */

  it('mount in a full DOM', () => {
    expect(mount(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    ).find('.main').length).toBe(1);
  });
});
