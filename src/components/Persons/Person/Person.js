import React, {Component} from 'react';
import './Person.css';
// import Radium from 'radium';
import WithClass from '../../../hoc/WithClass';
import withClassAlt from '../../../hoc/withClassAlt';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor', props);
        this.inputElement = React.createRef();
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position === 2){
            this.inputElement.current.focus();
        }        
      }

      focus() {
          if(this.props.position === 1){
              this.inputElement.current.focus();
          }
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
                    <input 
                        ref={this.inputElement}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name} />
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


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClassAlt(Person, "Person");