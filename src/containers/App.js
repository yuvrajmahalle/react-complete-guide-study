import React, { Component } from 'react';
 
import './App.css';
import Person from '../components/Persons/Person/Person';


class App extends Component {
  state ={
    persons:[
      {name:"ashish", age:23},
      {name:"test", age:32},
      {name:"xyz", age:24}
    ],
    showPersons:false
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name:newName, age:23},
        {name:"test", age:32},
        {name:"xyz", age:24}
      ]
    })
  }

  togglePersonName = () =>{
    const doesShow  = this.state.showPersons;
     this.setState({showPersons:!doesShow})

  }

  changeNameHandler = (event) =>{
    this.setState({
      persons:[
        {name:"newName", age:23},
        {name:event.target.value, age:32},
        {name:"xyz", age:24}
      ]
    })
  }

  render() {

    let persons = null;
    if(this.state.showPersons){

      persons = (
        <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,"original name")}
              changed={this.changeNameHandler}
              >Hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div>
      )

    }


    return (
      <div className="App">
        <h1>Hi, React complete guide</h1>
        <button onClick={this.togglePersonName}>Toggle Name</button>
         {persons}
      </div>
    );
  }
}

export default App;
