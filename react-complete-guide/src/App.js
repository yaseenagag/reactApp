import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Yaseen', age: 32 }
    ],
    otherState: 'some other value'
  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: 'newName', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Yaseen', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Yaseen', age: 26 }
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click ={this.switchNameHandler.bind(this, 'Max!')} 
          changed={this.nameChangedHandler}>My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
 // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;



