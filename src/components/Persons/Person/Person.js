import React from 'react';
import './Person.css';
// import Radium from 'radium';

// export class Person {
//     render(


//     );

// }
const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    // const rnd = Math.random();
    // if(rnd > 0.7) {
    //     throw new Error("Something went wrong");        
    // };
    return (
        // <div className="Person" style={style}>
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

// export default Radium(person);
export default person;