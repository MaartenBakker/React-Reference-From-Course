import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Maarten', age: 37 },
      { name: 'Anna', age: 36 },
      { name: 'Ella', age: 3 },
    ],
  };

  switchNameHandler = () => {
    // Don't mutate state directly :this.state.persons[0].name = 'Bakker';
    this.setState({
      persons: [
        { name: this.state.persons[1].name, age: 37 },
        { name: this.state.persons[0].name, age: 36 },
        { name: 'Kasper', age: 1 },
      ],
      otherState: 'Some other data',
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I'm also a Flautist
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
