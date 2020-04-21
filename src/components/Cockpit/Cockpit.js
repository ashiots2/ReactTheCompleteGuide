import React from "react";
import classes from "../../components/Cockpit/Cockpit.module.css";

const cockpit = (props) => {
  let btnClass = '';

  const assignedClasses = [];
  if (props.numPersons < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.numPersons < 2) {
    assignedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={assignedClasses.join(" ")}>This is really working!</p>
    <button className={btnClass} onClick={props.clicked}> Toggle Persons</button>
  </div>
};

export default cockpit;