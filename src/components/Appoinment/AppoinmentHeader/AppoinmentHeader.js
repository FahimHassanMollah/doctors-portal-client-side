import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import chair from '../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppoinmentHeader = ({dateChangeHandler}) => {
   
    return (
        <main>
            <div>
                <Row className="mx-0 d-flex align-items-center" style={{ height: '600px' }}>
                    <Col md={4} className="offset-md-1 ">
                        <div>
                            <h1 className="mb-5" style={{ color: "#3a4256" }}>Appointment</h1>
                            <div className="mt-5 pt-5">
                                <Calendar
                                    onChange={dateChangeHandler}
                                    value={new Date()}
                                />
                            </div>

                        </div>
                    </Col>
                    <Col md={6} className="">
                        <img className="img-fluid w-100" src={chair} alt="this is chair" />
                    </Col>
                </Row>
            </div>
        </main>
    );
};

export default AppoinmentHeader;