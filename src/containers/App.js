import React, { Component } from 'react';
 
import Radium from 'radium';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
 


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state ={
    persons:[
      {id:"agsf",name:"ashish", age:23},
      {id:"uytu",name:"test", age:32},
      {id:"vbncb",name:"xyz", age:24}
    ],
    showPersons:false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFormProps');
    return state;
  }

 /* componentWillMount(){
    console.log('[App.js] componentWillMount');
  } */

  componentDidMount(){
    console.log('[App.js] componentDidMount');
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

    console.log('[App.js] render');

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
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler} 
            changed={this.changeNameHandler} />
        </div>
      )
        
      style.backgroundColor = 'red';
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }

    }
 
    return (
      <WithClass classes={classes.App}>
          <Cockpit title={this.props.appTitle} styleCss={style} togglePerson={this.togglePersonName}/>
         {persons}
      </WithClass>
    );
  }
}

export default Radium(App);
