import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  render(){
    const todos = this.props.todos.map(todo => {
      return <li onClick={() => this.props.toggleTodo(todo.id)} className={todo.completed? 'todo-item completed-todo': 'todo-item incomplete-todo'  } key={todo.id}> {todo.text} </li>
    });
    return(
      <ol>

        {todos}

      </ol>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch({type: 'TOGGLE_TODO',payload: id})
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
