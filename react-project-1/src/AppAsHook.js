import React, { useState } from 'react';
import './AppAsHook.css';
import Person from './Person/Person';

const appAsHook = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Maarten', age: 37 },
      { name: 'Anna', age: 36 },
      { name: 'Ella', age: 3 },
    ],
  });

  const [otherState, setOtherstate] = useState('some other data');

  const switchNameHandler = newName => {
    // Don't mutate state directly :personState.persons[0].name = 'Bakker';
    setPersonsState({
      persons: [
        { name: personState.persons[1].name, age: 37 },
        { name: personState.persons[0].name, age: 36 },
        { name: newName, age: 1 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Kasper')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={switchNameHandler.bind(this, 'Berend')} // using .bind instead of () =>someFunc(). .bind(this, arg) is preferred
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        I'm also a Flautist
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default appAsHook;
