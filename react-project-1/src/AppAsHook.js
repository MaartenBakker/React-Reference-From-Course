import React, { useState } from 'react';
import './AppAsHook.css';
import person from './Person/Person';
import Person from './Person/Person';

const appAsHook = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Maarten', age: 37 },
      { name: 'Anna', age: 36 },
      { name: 'Ella', age: 3 },
    ],
  });

  const [showState, setShowState] = useState({
    showPersons: false,
  });

  const switchNameHandler = newName => {
    // Don't mutate state directly :personState.persons[0].name = 'Bakker';
    setPersonState({
      persons: [
        { name: personState.persons[1].name, age: 37 },
        { name: personState.persons[0].name, age: 36 },
        { name: newName, age: 1 },
      ],
    });
  };

  const nameChangedHandler = event => {
    setPersonState({
      persons: [
        { name: 'Maarten', age: 37 },
        { name: event.target.value, age: 36 },
        { name: event.target.value, age: 1 },
      ],
    });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  const togglePersonsHandler = () => {
    showState.showPersons
      ? setShowState({ showPersons: false })
      : setShowState({ showPersons: true });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={() => togglePersonsHandler()}>
        Switch Name
      </button>
      {showState.showPersons ? (
        <div>
          <Person
            name={personState.persons[0].name}
            age={personState.persons[0].age}
            click={switchNameHandler.bind(this, 'Berend')} // using .bind instead of () =>someFunc(). .bind(this, arg) is preferred
            changed={nameChangedHandler}
          />
          <Person
            name={personState.persons[1].name}
            age={personState.persons[1].age}
            changed={nameChangedHandler}
          >
            I'm also a Flautist
          </Person>
          <Person
            name={personState.persons[2].name}
            age={personState.persons[2].age}
            changed={nameChangedHandler}
          />
        </div>
      ) : null}
    </div>
  );
};

export default appAsHook;
