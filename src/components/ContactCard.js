import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const ContactCard = (props) => {
    console.log(props);
    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <div className="content" style={{ marginTop: 20, lineHeight: 2 }}>
                <Container style={{ marginLeft: 260 }}>
                    <Row xs={2} md={4} lg={12}>
                        <Link to={`/contact/${id}`}>
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
                        <Col style={{ marginLeft: 230 }}>
                            <i className="trash alternate outline icon"
                                style={{ color: "red",fontSize:22 }}
                                onClick={() => props.clickHandler(id)} ></i>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ContactCard;
