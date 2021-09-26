import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactCard = (props) => {
    console.log(props);
    const {id, name, email} = props.contact;

    return(
        <div className="item">
                <div className="content" style={{ marginTop: 20, lineHeight: 2 }}>
                    <Container style={{ marginLeft: 260 }}>
                        <Row xs={2} md={4} lg={12}>
                            <Col>
                                <div className="header">
                                    {name}
                                </div>
                            </Col>
                            <Col>
                                <div className="header">
                                    {email}
                                </div>
                            </Col>
                            <Col>
                                <i className="trash alternate outline icon" style={{ color: "red" }}></i>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
    )
}

export default ContactCard;
