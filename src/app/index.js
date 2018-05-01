import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoitem';
import './css/index.css'

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
    };
    this.onDelete = this.onDelete.bind(this);
  };

  render() {
    const newTodos = this.state.todos.map((todo, i) => <TodoItem key={i} item={todo} onDelete={this.onDelete} />);

    return(
      <div id="todo-list">
        <small>The busiest people have the most leisure...</small>
        <ul>{newTodos}</ul>
      </div>
    );
  } // render

  //Custom events
  onDelete(item) {
    const updatedTodos = this.state.todos.filter(todo => item !== todo);
    this.setState({
      todos: updatedTodos
    });
  }
}

//put component into html page

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
