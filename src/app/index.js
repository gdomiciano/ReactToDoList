import React from 'react';
import ReactDOM from 'react-dom';

// Create Component
class TodoComponent extends React.Component{
  render() {
    return(
      <div>
        <h2>{this.props.message}</h2>
        <p> <strong>Cheese name:</strong> {this.props.cheese.name}</p>
        <p> <strong>Cheese smell factor:</strong> {this.props.cheese.smellFactor}</p>
        <p> <strong>Cheese price:</strong> {this.props.cheese.price}</p>
      </div>
    );
  }
}

const myCheese = {
  name: 'Camembert',
  smellFactor: 'Extreme pong',
  price: '3.50',
}

//put component into html page

ReactDOM.render(<TodoComponent message="I like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));
