import React from "react"
import Person from "./Person/Person"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const persons = (props) => {
  console.log("[Persons.js] rendering...");

  return <div>
    {props.persons.map((person, index) => {

      return <ErrorBoundary key={"EB_" + person.id}><Person click={() => props.clicked(index)}
                                                            name={person.name}
                                                            age={person.age}
                                                            key={person.id} changed={(event) => {
        props.changed(event, person.id)
      }}/></ErrorBoundary>
    })}
  </div>;
}

export default persons;