import React, { Component } from 'react';
 
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state ={
    persons:[
      {name:"ashish", age:23},
      {name:"test", age:32},
      {name:"xyz", age:24}
    ]
  }

  switchNameHandler = () =>{
    this.setState({
      persons:[
        {name:"ashish testing event", age:23},
        {name:"test", age:32},
        {name:"xyz", age:24}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, React complete guide</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
         
      </div>
    );
  }
}

export default App;
