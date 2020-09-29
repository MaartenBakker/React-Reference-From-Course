import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Maarten', age: 37 },
      { id: 2, name: 'Anna', age: 36 },
      { id: 3, name: 'Ella', age: 3 },
      { id: 4, name: 'Kasper', age: 1 },
      { id: 5, name: 'Berend', age: 1 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
    console.log(this.state);
    console.log(persons);
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  togglePersons = () => {
    this.state.showPersons
      ? this.setState({ showPersons: false })
      : this.setState({ showPersons: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className="Persons">
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
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
