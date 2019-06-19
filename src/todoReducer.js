const initialTodosState = {
  todos: [],
  visibilityFilter: 'All'
};

const reducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos:[...state.todos, {...action.payload, completed:false} ]};
    default:
      return state;
  }
};

export default reducer;
