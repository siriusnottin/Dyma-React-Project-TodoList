import React from 'react';
import { Component } from 'react';
import { TodoList, AddTodo, Filter } from './components';

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <h4>Ajouter une todo</h4>
        <hr className="my-4" />
        <AddTodo />
        <hr className="my-4" />
        <div className="card">
          <div className="card-header d-flex flex-row align-items-center">
            <span className="flex-fill">Todo list</span>
            <Filter />
          </div>
          <div className="card-body">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
