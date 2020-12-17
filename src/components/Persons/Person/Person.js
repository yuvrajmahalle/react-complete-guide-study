import React, { Component } from 'react';
import './Person.css'

class Person extends Component{
    render(){
        console.log('[person.js] rednering..');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}/>
            </div>
        )
    }
};


export default Person;