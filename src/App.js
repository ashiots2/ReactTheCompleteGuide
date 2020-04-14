import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'idaj', name: "Max", age: 28},
      {id: 'asdas', name: "Manu", age: 29},
      {id: 'sudhaiu', name: "Stephanie", age: 26}]
  };

  // switchNameHandler = (newName) => {
  //   // console.log("Was clicked!");
  //   // DONT DO THIS => this.state.persons[0].name = "Maximilian"
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: "Manu", age: 29},
  //       {name: "Stephanie", age: 27}],
  //     showPersons: false,
  //   });
  // };

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // :hover is a pseudoselector
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}
                         key={person.id} changed={(event) => {
            this.nameChangedHandler(event, person.id)
          }}/>
        })}
      </div>);

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }
    }

    const classes = [];
    if (this.state.persons.length < 3) {
      classes.push("red");
    }
    if (this.state.persons.length < 2) {
      classes.push("bold");
    }

    return <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    </StyleRoot>;
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

// Radium is called a higher order component (component wrapping your component)
export default Radium(App);