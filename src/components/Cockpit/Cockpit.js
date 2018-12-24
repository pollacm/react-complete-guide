import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxil';
import AuthContext from '../../containers/App'

var cockpit = (props) => {
    const assignedClasses = []; //red bold

    let btnClass = 'Button';
    if(props.showPersons){
        btnClass = ['Button', 'Red'].join(' ');
    }

    if(props.persons.length <= 2){
        assignedClasses.push('Red');
    }
    if(props.persons.length <= 1) {
        assignedClasses.push('Bold');
    }

    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Show Person</button> 
            <button onClick={props.login}>Log in</button>
        </>
    )
};

export default React.memo(cockpit);