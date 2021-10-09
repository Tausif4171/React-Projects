import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className="main" style={{ marginTop: 100 }}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="error" />
                </div>

                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>

            </div>
            <div className="center-div" style={{marginLeft:474}}>
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetails;