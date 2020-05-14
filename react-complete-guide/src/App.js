import React, { Component } from 'react'; 
import classes from './App.module.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "1", name: "Maria", age: 33},
      {id: "4", name: "Victor", age: 40},
      {id: "3", name: "Alla", age: 2.5}
    ],
    otherState: 'some other value',
    showPersons: false
  };

deletePersonHandler = (personIndex)=>{
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons:persons})

}

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  };

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) =>{
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
    
        </div> 
      );
      // style.backgroundColor= 'red';
      // style[':hover']={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=2){
      assignedClasses.push(classes.bold)
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className='classes.Button' onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
       {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


export default App;





