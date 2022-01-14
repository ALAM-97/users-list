import React, { useState } from "react";
import './UserForm.css';

const UserForm = (props) => {
  // assegno gli stati
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  // funzione per assegnare lo stato all'username
  const usernameHandler = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  // funzione per assegnare lo stato all'age
  const ageHandler = (event) => {
    setAge(event.target.value)
    console.log(age)
  }
  
  // funzione per submittare il form
  const submitHandler = (event) => {
    event.preventDefault();

    const allNewUserInfos = {
      username: username,
      age: age,
      id: Math.random()
    }

    props.onSubmitForm(allNewUserInfos);
    setUsername('');
    setAge('');
  }


  return ( 
    <form className="formContainer" onSubmit={ submitHandler }>
      <label htmlFor="username">Username</label>
      <input 
        value={ username } 
        onChange={ usernameHandler } 
        name="username" 
        type="text"
      />
      <label htmlFor="age">Age (Years)</label>
      <input 
        value={ age } 
        onChange={ ageHandler } 
        type="number" 
        name="age" 
      />
      <button type="submit">Add user</button>
    </form>
  );
}

export default UserForm;