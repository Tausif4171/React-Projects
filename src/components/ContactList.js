import React from "react";
import { useRef } from "react";
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';



const ContactList = (props) => {
    // console.log(props);
    const inputElement = useRef("");

    const getsearchTerm = () => {
        props.searchKeyword(inputElement.current.value);
    }

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (

            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );

    });
    return (
        <>
            <div className="main" style={{ marginTop: 80 }}>

                <h2>
                    Contact List
                </h2>

                <div style={{ marginLeft: 900, marginTop: -34 }}>
                    <Link to="/add">
                        <button className="ui button blue">Add Contact</button>
                    </Link>
                </div>

                <div className="ui search">
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            placeholder="Search contacts"
                            type="text"
                            ref={inputElement}
                            value={props.term}
                            onChange={getsearchTerm}
                        />
                        <i className="search icon"></i>
                    </div>
                </div>

                <div className="ui celled list ">
                    {renderContactList.length > 0 ? renderContactList : "No contacts available"}
                </div>
            </div>



        </>
    )
};

export default ContactList;