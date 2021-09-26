import React from "react";
import ContactCard from './ContactCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactList = (props) => {
    // console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return (
           
            <ContactCard contact={contact} />
        );

    });
    return (
        <>

            <div className="ui celled list ">
                {renderContactList}
            </div>

        </>
    )
};

export default ContactList;