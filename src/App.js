import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },      
    ],
    otherState: 'some other value',
    username: 'Jeff'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },

    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },

    ]});
  }

  userInputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: 'whtte',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        {/* <h1>This is a react app!!!</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> {/*use bind if you can*/} {/*
        <Person 
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
        
        <UserInput
          change={this.userInputChangeHandler}
          username={this.state.username}
        />

        <UserOutput
          username={this.state.username} />
        <UserOutput
          username={this.state.username} />
        <UserOutput
          username={this.state.username} />
      </div>
    );
  }
}

export default App;