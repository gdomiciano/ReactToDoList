import React from 'react';
import ReactDOM from 'react-dom';

// Create Component
class TodoComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        'wash up',
        'eat some cheese',
        'take a nap',
        'buy Flowers',
      ],
      totalItems: 3,
    }
  };
  render() {
    let totalItems = setTimeout(() => {
      this.setState({
        totalItems: 4
      })
    }, 5000);
    const newTodos = this.state.todos.map((todo, i) => <TodoItem key={i} item={todo} />);

    return(
      <div id="todo-list">
        <small>The busiest people have the most leisure...</small>
        <small>{this.state.totalItems}</small>
        <ul>{newTodos}</ul>
      </div>
    );
  } // render
}

// Create Todo Item component
class TodoItem extends React.Component{
  render() {
    return(
      <li>
        <div className="todo-item">
        <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    )
  }
}

//put component into html page

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
