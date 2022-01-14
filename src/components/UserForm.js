import React, { useState } from "react";
// style
import styles from  './UserForm.module.css';

const UserForm = (props) => {
  // assegno gli stati
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  // funzione per assegnare lo stato all'username
  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  // funzione per assegnare lo stato all'age
  const ageHandler = (event) => {
    setAge(event.target.value)
  }
  
  // funzione per submittare il form
  const submitHandler = (event) => {
    event.preventDefault();

    const allNewUserInfos = {
      id: Math.random(),
      username: username,
      age: age
    }

    props.onSubmitForm(allNewUserInfos);
    setUsername('');
    setAge('');

    if ( age.length < 1 || username.length < 1 ) {
      console.log('error');
    }
  }


  return ( 
    <form className={ styles.formContainer } onSubmit={ submitHandler }>
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