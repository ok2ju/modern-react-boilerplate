/* @flow */

import React from 'react';

const About = ({ name = 'world' }: { name: string }) => (
  <h2 className="about">About {name} page</h2>
);

export default About;
