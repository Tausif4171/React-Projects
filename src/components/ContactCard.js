import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import user1 from '../images/user1.png';
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const ContactCard = (props) => {
    console.log(props);
    const { id, name, email } = props.contact;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="item">
            <img className="ui avatar image" style={{ width: 100, height: 60, marginTop: 16, marginLeft: 276 }} src={user1} alt="error" />
            <div className="content" style={{ marginTop: 20, lineHeight: 2 }}>
                <Container style={{ marginLeft: -30 }}>
                    <Row xs={2} md={4} lg={12}>
                        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }} style={{ marginLeft: 380, marginTop: -78 }}>
                            <Col style={{ marginLeft: 0 }}>
                                <div className="header">
                                    {name}
                                </div>
                            </Col>
                            <Col style={{ marginLeft: 0 }}>
                                <div className="header">
                                    {email}
                                </div>
                            </Col>
                        </Link>
                        <Col style={{ marginLeft: 746, marginTop: -78 }}>
                            <i className="trash alternate outline icon"
                                style={{ color: "red", fontSize: 22 }}
                                onClick={handleShow} ></i>
                        </Col>
                        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }} >
                            <Col style={{ marginLeft: 690, marginTop: -78 }}>
                                <i className="edit alternate outline icon"
                                    style={{ color: "blue", fontSize: 22 }}
                                ></i>
                            </Col>
                        </Link>
                    </Row>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure to delete data!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={() => props.clickHandler(id)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Container>
            </div>
        </div>
    )
}

export default ContactCard;
