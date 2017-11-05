import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

class About extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'world',
  };

  render() {
    return (
      <h2 className={theme.about}>About {this.props.name} page</h2>
    );
  }
}

export default About;
