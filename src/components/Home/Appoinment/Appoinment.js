import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Appoinment.css';
import doctor from '../../images/doctor.png';
import appoinmentBackground from '../../images/appoinmentBackground.png';
const Appoinment = () => {
    return (
        <div style={{marginTop:"150px"}} className="">
           
                <Row  className="appoinment-background-image mx-0 ">
                    <Col md={5} className='m-0 p-0 '>
                        <div className="m-0 p-0 ">
                            <img className="img-fluid change-position" src={doctor} alt=""/>
                        </div>
                    </Col>
             
                    <Col md={7}  className='m-0 p-0'>
                        <div className="mt-5 p-4">
                            <h6 className="mt-2" style={{color:'#1cc7c1'}}>APPOINTMENT</h6>
                            <h2 className="text-white mt-2">Make an appointment Today</h2>
                            <p className="text-white mt-2">It is a long established fact that a reader will be distractedby the readable content of a page when looking at its </p>
                            <Button className="mt-2">Learn More</Button>
                        </div>
                    </Col>
                </Row>
           
        </div>
    );
};

export default Appoinment;