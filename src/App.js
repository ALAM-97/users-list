import React, { useState } from 'react';
// styles
import './App.css';
// components
import UserForm from './components/UserForm';
import UserList from './components/UserList';

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

  // funzione per ricevere i dati del nuovo utente da UserForm.js
  const submitFormHandler = (newUserData) => {
    setUsers((prevUsers) => {
      return [newUserData, ...prevUsers];
    })
  }

  return (
    <div className="App">
      <UserForm onSubmitForm={ submitFormHandler } />
      <UserList userList={ users } />
    </div>
  );
}

export default App;
