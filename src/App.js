import React, { useState } from 'react';
// styles
import './App.css';
// components
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ErrorModal  from './components/UI/ErrorModal';

const ALL_USERS = [{
    id: 0.2354848,
    username: 'Fabio',
    age: 27
  },
  {
    id: 0.4856187,
    username: 'Laura',
    age: 33
  }
]

function App() {
  const [users, setUsers] = useState(ALL_USERS);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');

  // funzione per ricevere i dati del nuovo utente da UserForm.js
  const submitFormHandler = (newUserData) => {
    setUsers((prevUsers) => {
      return [newUserData, ...prevUsers];
    })
  }

  // funzione per mostrare la ErrorModal
  const showModalHandler = (show, errorMessage) => {
    setModal(show);
    setMessage(errorMessage);
  }

  // funzione per nascondere la ErrorModal
  const hideModalHandler = (hide) => {
    return setModal(hide);
  }

  return (
    <div className="App">
      { modal && <ErrorModal show={ modal } message={ message } hideModal={ hideModalHandler } /> }
      <UserForm 
        onSubmitForm={ submitFormHandler } 
        onError={ showModalHandler }
      />
      <UserList userList={ users } />
    </div>
  );
}

export default App;
