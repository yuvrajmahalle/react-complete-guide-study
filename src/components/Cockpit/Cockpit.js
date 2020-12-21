import React,{useEffect,useRef} from 'react';
import Radium from 'radium';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(()=>{
        console.log('[cockpit.js] useEffect');
        //setTimeout(()=>{
            //alert('Saved data to cloud!');
       // },1000);
       toggleBtnRef.current.click();
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
            <button ref={toggleBtnRef} style={props.styleCss} onClick={props.togglePerson}>Toggle Name</button>
        </div>
    );
}

export default React.memo(cockpit);