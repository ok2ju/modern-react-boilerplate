import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Todo extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className="todoItem">{this.props.text}</li>
    );
  }
}

export default Todo;
