import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  const style = {
    fontSize: '15px',
    color: '#101010',
    backgroundColor: '#888',
    border: '2px solid #666',
    borderRadius: '10px',
    margin: '20px auto',
    boxShadow: '0 4px 3px #ccc',
  };

  return (
    <div className="userOutput" style={style}>
      <p>{props.name}</p>
      <p>=============</p>
    </div>
  );
};

export default userOutput;
