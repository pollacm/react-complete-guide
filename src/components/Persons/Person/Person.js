import React, {Component} from 'react';
import './Person.css';
// import Radium from 'radium';
import WithClass from '../../../hoc/WithClass';
import withClassAlt from '../../../hoc/withClassAlt';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
      }
        render() {
            console.log('[Person.js] Inside render');
    return (
            // <div className="Person" style={style}>
            // <div className="Person">
            // <WithClass classes="Person">
            <>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            {/* </div> */}
            {/* </WithClass> */}
            </>
        )
    }
}

// const person = (props) => {
//     // const style = {
//     //     '@media (min-width: 500px)': {
//     //         width: '450px'
//     //     }
//     // };
//     // const rnd = Math.random();
//     // if(rnd > 0.7) {
//     //     throw new Error("Something went wrong");        
//     // };
//     return (
//         // <div className="Person" style={style}>
//         <div className="Person">
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// }

// export default Radium(person);
// export default person;
export default withClassAlt(Person, "Person");