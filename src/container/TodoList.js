import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

  filterTodos = (todos, filter) => {
    switch(filter){
      case 'FILTER_ALL':
        return todos;
      case 'FILTER_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'FILTER_INCOMPLETE':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

  render(){
    const todos = this.filterTodos(this.props.todos, this.props.visibilityFilter).map(todo => {
      return <li onClick={() => this.props.toggleTodo(todo.id)}
        className={todo.completed? 'todo-item completed-todo': 'todo-item incomplete-todo'}
        key={todo.id}> {todo.text} </li>
      });
    return(
      <ul>
        {todos}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos,
  visibilityFilter: state.filterReducer.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch({type: 'TOGGLE_TODO',payload: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
