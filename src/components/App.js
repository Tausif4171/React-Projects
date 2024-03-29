import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ContactList from './ContactList';
import Header from './Header';
import ContactDetails from './ContactDetails';
import api from '../api/contacts';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { uuid } from 'uuidv4';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState([]);
  const [searchResults, setsearchResults] = useState([]);

  const searcHandler = (searchTerm) => {
    setsearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter(contact => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setsearchResults(newContactList);
    }
    else {
      setsearchResults(contacts);
    }
  }

  //RetrieveContacts
  const retrievecontacts = async () => {
    const response = await api.get("/contacts");
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

  const updatecontactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact;
    }))
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
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
    const getAllContacts = async () => {
      const allContacts = await retrievecontacts();
      if (allContacts) setContacts(allContacts);
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
            <ContactList
              {...props}
              contacts={searchTerm.length < 1 ? contacts : searchResults}
              getContactId={removeContactHandler}
              term={searchTerm}
              searchKeyword={searcHandler}

            />
          )} />

          <Route path="/add" render={(props) => (
            <AddContact {...props} addcontactHandler={addcontactHandler} />
          )} />

          <Route path="/edit" render={(props) => (
            <EditContact {...props} updatecontactHandler={updatecontactHandler} />
          )} />

          <Route path="/contact/:id" component={ContactDetails} />
          {/* <Route path="/"  component={Footer} /> */}

        </Switch>
        <Footer />
      </Router>


      {/* <AddContact addcontactHandler={addcontactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      {/* <ContactCard /> */}
      
    </div>
  );
}

export default App;
