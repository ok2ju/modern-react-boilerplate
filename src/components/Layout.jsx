/* @flow */

import React from 'react';
import { Link } from 'react-router';

const Layout = ({ name = 'world', children }: { name: string, children: any }) => (
  <div className="main">
    <header>
      <h2>App header</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </header>
    <section>
      <h2 className="foo">Hello, {name}</h2>
      {children}
    </section>
  </div>
);

export default Layout;
