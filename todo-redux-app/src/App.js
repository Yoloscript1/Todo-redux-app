import React from 'react';
import { Provider } from 'react-redux';
//import store from './redux/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';
import './App.css';
import reducer from './redux/reducer';
import { createStore } from 'redux';

const store = createStore(reducer);

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTask />
        <Filter />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;


