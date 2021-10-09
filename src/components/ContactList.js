import React from "react";
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';



const ContactList = (props) => {
    // console.log(props);
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



                <div className="ui celled list ">
                    {renderContactList}
                </div>
            </div>



        </>
    )
};

export default ContactList;