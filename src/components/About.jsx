import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class About extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'world',
  };

  render() {
    return (
      <h2 className="about">About {this.props.name} page</h2>
    );
  }
}

export default About;
