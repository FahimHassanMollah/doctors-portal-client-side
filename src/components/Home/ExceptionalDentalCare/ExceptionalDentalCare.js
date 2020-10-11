import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dentalCare from '../../images/dentalCare.png';
const ExceptionalDentalCare = () => {
    return (
        <div>
            <Container className="m-5 p-5">
                <Row>
                    <Col md={5}>
                        <div>
                            <img className="img-fluid" src={dentalCare} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mt-5">
                            <h2 className=""  style={{color:'#3a4256'}}>Exceptional Dental Care, on Your Terms</h2>
                            <p className="mt-5 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExceptionalDentalCare;