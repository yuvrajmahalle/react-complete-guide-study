import React,{useEffect} from 'react';
import Radium from 'radium';

const cockpit = (props) => {
    useEffect(()=>{
        console.log('[cockpit.js] useEffect');
        //setTimeout(()=>{
            //alert('Saved data to cloud!');
       // },1000);
        return () => {
            console.log('cockpit.js cleanup work in use effect');
        }
    },[]); // useEffect method which run whenenver compontent rerender.

    useEffect(()=>{
        console.log('cockpit.js 2nd useEffect');
        return () => {
            console.log('cockpit cleanup work in useeffect');
        }
    });

    return(
        <div>
            <h1>{props.title}</h1>
            <button style={props.styleCss} onClick={props.togglePerson}>Toggle Name</button>
        </div>
    );
}

export default Radium(cockpit);