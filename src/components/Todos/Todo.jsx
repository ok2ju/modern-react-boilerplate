import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

class Todo extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className={theme.todoItem}>{this.props.text}</li>
    );
  }
}

export default Todo;
