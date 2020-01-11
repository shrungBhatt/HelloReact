import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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

    if(this.state.showPersons){
      personsDiv = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked =  {this.deletePersonHandler}
            changed = {this.changedNameHandler}
          />
        </div>
      );

    }

    return (
      <div className={cssClass.App}>
        <Cockpit persons = {this.state.persons}
                 showPersons = {this.state.showPersons}
                 click = {() => this.togglePersonsDiv()}/>
        {personsDiv}
      </div>
    );
  }
}

export default App;
