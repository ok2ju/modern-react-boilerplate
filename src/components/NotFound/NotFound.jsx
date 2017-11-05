import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

class NotFound extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'Test',
  };

  render() {
    return (
      <h2 className={theme.about}>Sorry, {this.props.name} page not found</h2>
    );
  }
}

export default NotFound;
