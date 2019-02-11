import React, {Component} from 'react';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render(){
    return (
      <div className="todoListMain">
      <h1> My todoList!</h1>
      <h3>Made by Doftgrahn</h3>
        <div className="header">
          <form onSubmit={this.props.addItem}>
          <input placeholder="Task"
          ref={this.props.inputElement}
          value={this.props.currentItem.text}
          onChange={this.props.handleInput} />
          <button type="submit"> Add task</button>
          </form>
        </div>
      </div>
    )
  }
};


export default TodoList;
