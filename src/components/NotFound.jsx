/* @flow */

import React from 'react';

const NotFound = ({ name = 'Test' }: { name: string }) => (
  <h2 className="about">Sorry, {name} page not found</h2>
);

export default NotFound;
