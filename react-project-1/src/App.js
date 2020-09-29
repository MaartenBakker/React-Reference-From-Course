import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidatorComponent from './ValidatorComponent/ValidatorComponent';
import CharComponent from './CharComponent/CharComponent';

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
    inputTextLength: null,
    inputText: [],
    characterKey: 0,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
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

  inputTextHandler = event => {
    const inputText = event.target.value;
    this.setState({ inputTextLength: inputText.length });
    this.setState({ inputText: [...inputText] });
  };

  deleteCharComponent = index => {
    let inputText = [...this.state.inputText];
    inputText.splice(index, 1);
    this.setState({ inputText });
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

    const inputText = [...this.state.inputText];

    let charComponents = (
      <div>
        {inputText.map((character, index) => {
          return (
            <CharComponent
              character={character}
              key={index}
              click={() => this.deleteCharComponent(index)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <input
          type="text"
          value={this.state.inputText.join('')}
          onChange={event => this.inputTextHandler(event)}
        />
        <ValidatorComponent textLength={this.state.inputTextLength} />
        <button onClick={this.togglePersons}>Toggle Persons</button>
        {charComponents}
        {persons}
      </div>
    );
  }
}

export default App;
