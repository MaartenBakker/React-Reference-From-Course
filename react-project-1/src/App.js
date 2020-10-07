import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import Person from './Person/Person';
import Validator from './Validator/Validator';
import Char from './Char/Char';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

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

  deleteChar = index => {
    let inputText = [...this.state.inputText];
    inputText.splice(index, 1);
    this.setState({ inputText });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    const chars = (
      <div>
        {this.state.inputText.map((character, index) => {
          return (
            <Char
              character={character}
              key={index}
              click={() => this.deleteChar(index)}
            />
          );
        })}
      </div>
    );

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Input your text</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <input
          type="text"
          value={this.state.inputText.join('')}
          onChange={event => this.inputTextHandler(event)}
        />
        {chars}
        <p>{this.state.inputText.length}</p>

        <Validator textLength={this.state.inputText.length} />
        <StyledButton onClick={this.togglePersons}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
