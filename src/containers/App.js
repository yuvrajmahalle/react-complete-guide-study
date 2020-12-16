import React, { Component } from 'react';
 
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, React complete guide</h1>
        <Person name="Ashish" age="23"/>
        <Person name="abc" age="24">Hobbies: Racing</Person>
        <Person name="xyz" age="25"/>
        <Person name="pqr" age="26" />
      </div>
    );
  }
}

export default App;
