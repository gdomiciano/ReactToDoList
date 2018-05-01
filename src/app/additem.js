import React from "react";
import './css/addItem.css';

class AddItem extends React.Component{
  render() {
    return(
      <form id="add-todo" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Add item" />
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
};

export default AddItem;
