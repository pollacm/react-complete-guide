import React from 'react';
import classes from './Cockpit.css';

var cockpit = (props) => {
    const assignedClasses = []; //red bold

    let btnClass = '';
    if(props.showPersons){
        btnClass = 'Red';
    }

    if(props.persons.length <= 2){
        assignedClasses.push('Red');
    }
    if(props.persons.length <= 1) {
        assignedClasses.push('Bold');
    }

    return (
        <div className="Cockpit">
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Show Person</button> 
        </div>
    )
};

export default cockpit;