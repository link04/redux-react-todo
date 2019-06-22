const initialTodosState = {
  todos: []
};

const reducer = (state = initialTodosState,action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos:[...state.todos, {...action.payload, id: state.todos.length + 1, completed:false} ]};
    case 'TOGGLE_TODO':
      return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)};
    default:
      return state;
  }
};

export default reducer;
