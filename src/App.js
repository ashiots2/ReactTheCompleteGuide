import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'idaj', name: "Max", age: 28},
      {id: 'asdas', name: "Manu", age: 29},
      {id: 'sudhaiu', name: "Stephanie", age: 26}]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });

    const person = {...this.state.persons[personIndex]}
    // Old way of doing above: const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    let persons = null;

    let btnClass = '';

    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}
                         key={person.id} changed={(event) => {
            this.nameChangedHandler(event, person.id)
          }}/>
        })}
      </div>);

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Persons</button>
      {persons}
    </div>;
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

// Radium is called a higher order component (component wrapping your component)
export default App;