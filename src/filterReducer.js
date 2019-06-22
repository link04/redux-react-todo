const initialFilteredTodosState = {
  visibilityFilter: 'FILTER_ALL'
};

const reducer = (state = initialFilteredTodosState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return {...state, visibilityFilter: action.payload};
    default:
      return state;
  }
};

export default reducer;
