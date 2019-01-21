import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

function Person() {
    const btn = "Search Button";
    const name = "Abdul";
    const lname = " Motaleb";

    return (
        <section>
            <button>{btn}</button>
            <h2>{`${name} ${lname}`}</h2>
            <p>{10+12}</p>
        </section>
    );
}

ReactDOM.render( <Person /> , document.getElementById('root'));