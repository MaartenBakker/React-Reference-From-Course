import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Berend',
  };

  onChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput onChange={this.onChangeHandler}></UserInput>
        <UserOutput name={this.state.username} />
        <UserOutput name="Adriaan" />
        <UserOutput name="Bakker" />
      </div>
    );
  }
}

export default App;
