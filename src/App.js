import './App.css';
// components
import UserForm from './components/UserForm';

function App() {
  // funzione per ricevere i dati del nuovo utente da UserForm.js
  const submitFormHandler = (newUserData) => {
    const allNewUserInfos = {
      ...newUserData
    }
    console.log(allNewUserInfos)
  }
  return (
    <div className="App">
      <UserForm onSubmitForm={ submitFormHandler } />
    </div>
  );
}

export default App;
