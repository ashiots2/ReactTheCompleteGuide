import React, {Component} from 'react';
import classes from './Person.module.css';
import WithClass from "../../../hoc/WithClass";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");

    const rnd = Math.random();

    if (rnd > 0.99) {
      throw new Error("Something went wrong!");
    }

    return (<Auxiliary>
      {this.context.authenticated ? <p>Authenticated</p> :
        <p>Please log in</p>}
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input ref={this.inputElementRef} type="text" onChange={this.props.changed}
             value={this.props.name}/>
    </Auxiliary>);
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
};

export default WithClass(Person, classes.Person);