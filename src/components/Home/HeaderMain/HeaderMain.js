import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../images/chair.png';

const HeaderMain = () => {
    return (
        <div>
            <Row className="mx-0 d-flex align-items-center" style={{height:'600px'}}>
                <Col md={4} className="offset-md-1 ">
                    <div>
                        <h1 style={{color:"#3a4256"}}>Your New Smile <br/> Starts Here</h1>
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                       <Link to={'/appoinment'}> <Button >Get Appoinment</Button></Link>
                    </div>
                </Col>
                <Col md={6} className="">
                    <img className="img-fluid w-100" src={chair} alt="this is chair" />
                </Col>
            </Row>
        </div>
    );
};

export default HeaderMain;