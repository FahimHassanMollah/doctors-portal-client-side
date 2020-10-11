import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceInfoCard = (props) => {
    return (
        <Col md={4} className="pt-5 text-muted">
            <div className="">
                <div style={{height:'80px'}} className="text-center mb-4">
                    <img style={{height:'80px',width:'80px'}} src={props.info.image} alt="ima"/>
                </div>
                <div className="text-center mt-2">
                    <h5>{props.info.title}</h5>
                    <p className="mt-3">{props.info.description}</p>
                </div>
            </div>
        </Col>
    );
};

export default ServiceInfoCard;