import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotFound extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'Test',
  };

  render() {
    return (
      <h2 className="about">Sorry, {name} page not found</h2>
    );
  }
}

export default NotFound;
