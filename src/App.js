import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Character from './Char/Char';
import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons: [
      { id: '3214', name: 'Max', age: 28 },
      { id: '3798', name: 'Manu', age: 29 },
      { id: '9846', name: 'Stephanie', age: 26 },      
    ],
    otherState: 'some other value',
    username: 'Jeff',
    showPersons: false,
    characters: ''
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { id: '3214',  name: newName, age: 28 },
        { id: '3798',  name: 'Manu', age: 29 },
        { id: '9846',   name: 'Stephanie', age: 27 },

    ]});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person  = {...this.state.persons[personIndex]};
    //const person2 = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  showPersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  userInputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  textLengthChangeHandler = (event) => {
    this.setState({
      characters: event.target.value
    });
  }

  characterClickHandler = (indexOfCharacter) => {
    var characters = [...this.state.characters.split('')];
    characters.splice(indexOfCharacter, 1);
    this.setState({
      characters: characters.join('')
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } 
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            key={person.id}
            name={person.name} 
            age={person.age} 
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
          })}          
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] =   {
        backgroundColor: 'salmon',
        color: 'black'
      } 
    }

    const charList = this.state.characters.split('').map((character, index) => {
      return <Character 
        character={character}
        key={index} 
        click={() => this.characterClickHandler(index)}></Character>
    });

    const classes = []; //red bold
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>This is a react app!!!</h1>
          <p className={classes.join(' ')}>This is really working</p>
          {/* <input type="text" onChange={this.textLengthChangeHandler} value={this.state.characters}/>
          <p>{this.state.characters.length}</p>
          <Validation textLength={this.state.characters.length} />
          {charList} */}

          <button 
            style={style} 
            onClick={() => this.showPersonHandler()}>Show Person</button> {/*use bind if you can*/}         
          {persons}

          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            click={this.switchNameHandler.bind(this, 'Max!')} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler} 
            changed={this.nameChangedHandler}>This is awesome</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
            click={this.switchNameHandler} /> */}
          
          {/* <UserInput
            change={this.userInputChangeHandler}
            username={this.state.username}
          />

          <UserOutput
            username={this.state.username} />
          <UserOutput
            username={this.state.username} />
          <UserOutput
            username={this.state.username} />*/}
        </div> 
      </StyleRoot>
    );
  }
}

export default Radium(App);