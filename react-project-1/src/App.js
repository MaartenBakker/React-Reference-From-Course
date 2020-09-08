import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Maarten" age="37" />
        <Person name="Anna" age="36">
          I'm also a Flautist
        </Person>
        <Person name="Ella" age="3" />
      </div>
    );
    // Compiles to:
    // return React.createElement(
    //   'div',
    //   null,
    //   React.createElement(
    //     'h1',
    //     { className: 'App' },
    //     'Hi, I'm a React App'
    //   )
    // );
  }
}

export default App;
