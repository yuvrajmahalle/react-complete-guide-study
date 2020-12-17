import React, { Component,Fragment } from 'react';
import './Person.css'
import Aux from '../../../hoc/Auxiliary';

class Person extends Component{
    render(){
        console.log('[person.js] rednering..');
        return (
            <Fragment>
            <div className="Person">
                <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}/>
            </div>
            </Fragment>
        )
    }
};


export default Person;