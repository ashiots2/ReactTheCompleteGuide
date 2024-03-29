import React, {PureComponent} from "react"
import Person from "./Person/Person"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Persons extends PureComponent {

  // Shows error as it has no initial state to return, therefore this is useless.
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // Deprecated
  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log("[Persons.js] componentWillReceiveProps")
  // }

  // Deprecated
  // componentWillUpdate(nextProps, nextContext) {
  //   console.log("[Persons.js] componentWillUpdate")
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log("[Persons.js] shouldComponentUpdate")
  //   return nextProps.persons !== this.props.persons;
  //
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message: "Snapshot!"};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");

    return <div>
      {this.props.persons.map((person, index) => {

        return <ErrorBoundary key={"EB_" + person.id}>
          <Person click={() => this.props.clicked(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  isAuth={this.props.isAuthenticated}
                  changed={(event) => {
                    this.props.changed(event, person.id)
                  }}/>
        </ErrorBoundary>
      })}
    </div>;
  }
}

export default Persons;