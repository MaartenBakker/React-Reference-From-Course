import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return <input type="text" className="userInput" onChange={props.onChange} />;
};

export default userInput;
