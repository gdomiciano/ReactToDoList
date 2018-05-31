import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router';
import TodoItem from './todoitem';
import AddItem from './additem';
import About from './about';
import './css/index.css'



  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={TodoComponent}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
);

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
    this.onAdd = this.onAdd.bind(this);
  };

  render() {
    const newTodos = this.state.todos.map((todo, i) => <TodoItem key={i} item={todo} onDelete={this.onDelete} />);

    return(
      <div id="todo-list">
        <Link to="/about">About</Link>
        <p>The busiest people have the most leisure...</p>
        <ul>{newTodos}</ul>
        <AddItem onAdd={this.onAdd}/>
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

  onAdd(newItem){
    const updatedTodos = [ ...this.state.todos, newItem ]
    this.setState({
      todos: updatedTodos
    });
  }

  // lifecycle functions
  componentWillMount() {
    console.log('component will mount');
  }
  componentDidMount() {
    console.log('component did mount');
    //any grabbing of external data
  }
  componentWillUpdate() {
    console.log('component will Update');
  }
}

//put component into html page

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
