import React from 'react';
import personCss from './Person.css';

const person = (props) => {
    return (
        <div className={personCss.Person}>
            <p onClick={props.click}>Hello I am {props.name}, I am {props.age} years old</p>
            <p>My Hobbies: {props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )   
}

export default person;