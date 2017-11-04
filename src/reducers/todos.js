import { ADD_TODO } from '../constants/actionTypes';

const initialState = [{
  id: 0,
  text: 'Todo#1',
  marked: false,
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        marked: false,
        text: action.payload,
      }, ...state];
    default:
      return state;
  }
}
