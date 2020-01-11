import React from 'react';
import Style from './Cockpit.css';

const Cockpit = (props) => {

    
    let buttonStyle = [Style.Button];

    if(props.showPersons){
        buttonStyle.push(Style.Red);
    }

    const textStyle = [];
    if(props.persons.length <= 2){
      textStyle.push(Style.red);
    }

    if(props.persons.length <= 1){
      textStyle.push(Style.bold);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={textStyle.join(' ')}>I am enjoying it so far!!</p>
            <button className={buttonStyle.join(' ')} onClick={props.click}>Show Persons</button>
        </div>
    )
};

export default Cockpit;