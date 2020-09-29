import React from 'react';

const validatorComponent = props => {
  const output =
    props.textLength >= 5 ? <p>Text long enough</p> : <p>Text too short</p>;

  return output;
};

export default validatorComponent;
