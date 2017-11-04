import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class Todos extends PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        marked: PropTypes.bool,
      }),
    ),
    addTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    todos: [],
  };

  state = {
    value: '',
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.value);
  };

  handleTodoChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { todos } = this.props;

    return (
      <div className="todos">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleTodoChange}
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
