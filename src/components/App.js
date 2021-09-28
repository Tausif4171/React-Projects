import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
// import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { uuid } from 'uuidv4';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);
  const addcontactHandler = (contact) => {

    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
    return;

  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);

  }

  useEffect(() => {
    const retrivelocalstorage = JSON.parse(localStorage.getItem(localStorageKey));
    if (retrivelocalstorage) {
      setContacts(retrivelocalstorage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);
  return (

    <div className="ui container">

      <Router>

        <Header />
        <Switch>
          <Route path="/" exact render={(props) => (
            <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />
          )} />
          <Route path="/add" render={(props) => (
            <AddContact {...props} addcontactHandler={addcontactHandler} />
          )} />
        </Switch>

      </Router>


      {/* <AddContact addcontactHandler={addcontactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      {/* <ContactCard /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
