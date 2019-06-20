import React from 'react';
import { connect } from 'react-redux';


class TodoForm extends React.Component {

  state = {
    text: ''
  };

  onInputChange = (event) => {
     this.setState({
       text: event.target.value
     });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo({text: this.state.text});
    this.setState({
      text: ''
    });

  };

  render(){
    return(
      <div>
        <h3>Add To-Do's</h3>
        <form noValidate>
          <input type="text" required  placeholder="Add Todo" onChange={this.onInputChange} value={this.state.text} />
          <hr/>
          <input type="submit" disabled={this.state.text.split(' ').join('') === ''} onClick={this.onFormSubmit} value="Add"  />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch({type: 'ADD_TODO', payload: data})
});

export default connect(null, mapDispatchToProps)(TodoForm);
