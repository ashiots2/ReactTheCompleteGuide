import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate")
  }

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


    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler}
                         changed={this.nameChangedHandler}/>
    }


    return <div className={classes.App}>
      <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} numPersons={this.state.persons.length}
               clicked={this.togglePersonsHandler}/>
      {persons}
    </div>;
  }
}

export default App;