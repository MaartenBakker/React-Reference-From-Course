import React from 'react';
import styled from 'styled-components';

// import './Person.css';
const StyledDiv = styled.div`
  width: 60%;
  margin: 30px;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 600px) {
    width: 450px;
  }
`;

const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <h1>{props.children}</h1>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
