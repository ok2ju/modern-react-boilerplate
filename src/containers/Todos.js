import { connect } from 'react-redux';
import { ADD_TODO } from '../constants/actionTypes';
import Todos from '../components/Todos';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: ADD_TODO, payload: text }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
