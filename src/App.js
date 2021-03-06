import React from 'react';
import './App.css';
import Quote from './components/Quote';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
