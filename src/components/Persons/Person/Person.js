import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import './Person.css'
import Aux from '../../../hoc/Auxiliary';

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef(); // used to set reference.
    }

    componentDidMount(){
        this.inputElementRef.current.focus();  // assigning focus() tot he current inputElementRef which is provided by the creatRef() method inside the constructor.   
    }

    render(){
        console.log('[person.js] rednering..');
        return (
            <Fragment>
            <div className="Person">
                <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text"
                    ref={this.inputElementRef}
                 value={this.props.name} 
                 onChange={this.props.changed}/>
            </div>
            </Fragment>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed:PropTypes.func
}
     

export default Person;