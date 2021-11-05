import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import ContactDetails from './ContactDetails';
import api from '../api/contacts';
// import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { uuid } from 'uuidv4';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retrievecontacts = async () =>{
    const response =await api.get("/contacts");
    return response.data;
  };

  const addcontactHandler = async (contact) => {

    console.log(contact);

    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);

  }

  useEffect(() => {
    /*
    const retrivelocalstorage = JSON.parse(localStorage.getItem(localStorageKey));
    if (retrivelocalstorage) {
      setContacts(retrivelocalstorage);
    }
    */
    const getAllContacts = async () =>{
      const allContacts = await retrievecontacts();
      if(allContacts) setContacts(allContacts);
    };

    getAllContacts();

  }, []);
  
  useEffect(() => {
    // localStorage.setItem(localStorageKey, JSON.stringify(contacts));
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

          <Route path="/contact/:id" component={ContactDetails} />
          {/* <Route path="/"  component={Footer} /> */}

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
