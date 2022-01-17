import React, { useState, useRef } from "react";
// style
import styles from  './UserForm.module.css';

const UserForm = (props) => {
  // assegno gli stati
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inputUsername = useRef();
  const inputAge = useRef();

  // funzione per submittare il form
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = inputUsername.current.value;
    const enteredAge = inputAge.current.value;

    // validazione form
    if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
      setError(true);
      setErrorMessage('Devi inserire i valori richiesti!');
      props.onError(error, errorMessage);
      return;
    }
    if (+enteredAge < 1) {
      setError(true);
      setErrorMessage("Il valore dell'età deve essere maggiore di 0");
      props.onError(error, errorMessage);
      return;
    }
    // ritorna il nuovo utente se il form è stato compilato correttamente
    const allNewUserInfos = {
      id: Math.random(),
      username: enteredName,
      age: enteredAge
    }

    props.onSubmitForm(allNewUserInfos);
    setError(false);

    inputUsername.current.value = '';
    inputAge.current.value = '';
  }


  return ( 
    <form className={ styles.formContainer } onSubmit={ submitHandler }>
      <label htmlFor="username">Username</label>
      <input 
        name="username" 
        type="text"
        ref={ inputUsername }
      />
      <label htmlFor="age">Age (Years)</label>
      <input 
        type="number" 
        name="age"
        ref={ inputAge }
      />
      <button type="submit">Add user</button>
    </form>
  );
}

export default UserForm;