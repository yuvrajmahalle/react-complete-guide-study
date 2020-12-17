import React, { Component } from 'react';
 
import Radium from 'radium';
import './App.css';
import Person from '../components/Persons/Person/Person';


class App extends Component {
  state ={
    persons:[
      {id:"agsf",name:"ashish", age:23},
      {id:"uytu",name:"test", age:32},
      {id:"vbncb",name:"xyz", age:24}
    ],
    showPersons:false
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {id:"agsf",name:newName, age:23},
        {id:"uytu",name:"test", age:32},
        {id:"vbncb",name:"xyz", age:24}
      ]
    })
  }

  togglePersonName = () =>{
    const doesShow  = this.state.showPersons;
     this.setState({showPersons:!doesShow})

  }

  changeNameHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons  = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) =>{
    const persons  = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  render() {
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let persons = null;
    if(this.state.showPersons){

      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)} 
            name={person.name} age={person.age} key={person.id}
            changed={(event) => {this.changeNameHandler(event,person.id)}}
            />
          })}
        </div>
      )
        
      style.backgroundColor = 'red';
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }

    }


    return (
      <div className="App">
        <h1>Hi, React complete guide</h1>
        <button style={style} onClick={this.togglePersonName}>Toggle Name</button>
         {persons}
      </div>
    );
  }
}

export default Radium(App);
