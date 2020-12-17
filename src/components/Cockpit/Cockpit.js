import React from 'react';
import Radium from 'radium';

const cockpit = (props) => {
    return(
        <div>
            <h1>Hi, React complete guide</h1>
            <button style={props.styleCss} onClick={props.togglePerson}>Toggle Name</button>
        </div>
    );
}

export default Radium(cockpit);