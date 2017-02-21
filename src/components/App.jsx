/* @flow */

import React from 'react';

const App = ({ name = 'world' }: { name: string }) => (
  <h2 className="foo">Hello, {name}</h2>
);

export default App;
