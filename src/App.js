import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodos';
import About from './components/pages/About';
import Linksusefull from './components/pages/Linksusefull';
import Help from './components/pages/Help';
import uuid from 'uuid';
import  './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Find Your New House',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Need Date of Moving',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Book Sunshine Removalists',
        completed: false
      },
      {
        id: uuid.v4(),
        title: '2-3 Weeks Before Start Packing',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Check Local Schools',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Finish Bedrooms',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Finnish Lounge & Family Rooms',
        completed: false
      },
      {
        id: uuid.v4(),
        title: '1 Week Before Organise Utilities',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Forwarding Adress Mail Delivery',
        completed: false
      },
      {
        id: uuid.v4(),
        title: '1 Day Before Pack Kitchen',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Moving Day Meet Sunshine Movers',
        completed: false
      }
    ]
  }

// Toggle Complete
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) })
}

// Delete
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
};

// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  };
  this.setState({ todos: [...this.state.todos, newTodo]});
};

  render() {
    return ( 
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/About" component={About} />
            <Route path="/Linksusefull" component={Linksusefull} />
            <Route path="/Help" component={Help} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
