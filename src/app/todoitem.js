import React from 'react';
import './css/todoItem.css'

// Create Todo Item component
class TodoItem extends React.Component{
  render() {
    return(
      <li>
        <div className="todo-item">
        <span className="item-name">{this.props.item}</span>
        <span className="item-delete" onClick={() => this.handleDelete(this.props.item)}> X </span>
        </div>
      </li>
    )
  }

  // Custom functions
  handleDelete(item) {
    this.props.onDelete(item);
  };
}

export default TodoItem;
