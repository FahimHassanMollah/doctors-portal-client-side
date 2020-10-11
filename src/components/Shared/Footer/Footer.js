import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-bg">
            <Container className="mt-5 pt-5">
                <Row>
                    <Col md={3}>
                        <h4 className='textColor1 font-weight-bold ml-3'>Emergency</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emargency Dental</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Cheeck Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Personal Deasies Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Tooth Extraction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emergency Cheeck Up </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4 className='textColor1 font-weight-bold ml-3'>Services</h4>
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emargency Dental</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Cheeck Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Personal Deasies Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Tooth Extraction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emergency Cheeck Up </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4 className='textColor1 font-weight-bold ml-3'>Oral Health</h4>
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emargency Dental</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Cheeck Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Personal Deasies Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Tooth Extraction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emergency Cheeck Up </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3 className='textColor1 font-weight-bold ml-3'>Our Address</h3>
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">New York - 101010 Hudson</Link>
                            </li>
                        </ul>
                        <div className="btn-group py-3 ml-3">
                            <button type="button" className="btn bgGradient rounded rounded-circle mr-2 text-light"><FontAwesomeIcon style={{ fontSize: '30px',color:'#18d3b5' }} icon={faFacebook}></FontAwesomeIcon></button>
                            <button type="button" className="btn bgGradient rounded rounded-circle mr-2 text-light"><FontAwesomeIcon style={{ fontSize: '30px',color:'#18d3b5' }} icon={faGooglePlus}></FontAwesomeIcon></button>
                            <button type="button" className="btn bgGradient rounded rounded-circle text-light"><FontAwesomeIcon size="lg" style={{ fontSize: '30px',color:'#18d3b5' }} icon={faTwitter}></FontAwesomeIcon></button>
                        </div>
                        <p className='text-secondary ml-3 mt-5'>Call Now</p>
                        <Button className='btn  ml-3'>+880 1746243302</Button>
                  
               
           
            <p className='text-secondary small text-center mt-5'>Copyright 2020 All Right Reserved</p>
                    </Col>
                </Row >
            </Container >
        </div >
    );
};

export default Footer;