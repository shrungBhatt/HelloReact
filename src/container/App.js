import React, { Component } from 'react';
import Person from '../components/Person/Person';
import cssClass from './App.css';

class App extends Component {

  state = {
    persons:[
      { id: 1, name:"Shrung Bhatt", age: 22},
      { id: 2, name:"Hunt Jigsaw", age: 30},
      { id: 3, name:"Enzo", age: 58}
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(index, 1);
    this.setState({persons: updatedPersons});
  }

  changedNameHandler = (event, id) => {

    //Find the index of person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    //Create a new object of that person
    const person = {
      ...this.state.persons[personIndex]
    };

    //Update the person name value
    person.name = event.target.value;

    //Create a new object of global persons
    const updatedPersons = [...this.state.persons];
    //Change the updated person value
    updatedPersons[personIndex] = person;
    //Update the state of persons
    this.setState({persons: updatedPersons});
  }
  
  togglePersonsDiv = () => {
    const doShow = this.state.showPersons;
    this.setState({showPersons:!doShow});
  }

  render() {

    let personsDiv = null;
    let buttonStyle = [cssClass.Button];

    if(this.state.showPersons){
      personsDiv = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
              click = {this.deletePersonHandler.bind(this, index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              change = {(event) => this.changedNameHandler(event, person.id)} />
            })
          }
        </div>
      );

      buttonStyle.push(cssClass.Red);
    }

    const textStyle = [];

    if(this.state.persons.length <= 2){
      textStyle.push(cssClass.red);
    }

    if(this.state.persons.length <= 1){
      textStyle.push(cssClass.bold);
    }

    return (
      <div className={cssClass.App}>
        <h1>This is my first app in React!</h1>
        <p className={textStyle.join(' ')}>I am enjoying it so far!!</p>
        <button className={buttonStyle.join(' ')} onClick={this.togglePersonsDiv}>Show Persons</button>
        {personsDiv}
      </div>
    );
  }
}

export default App;
