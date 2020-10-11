import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BusinessInforCard = (props) => {
    return (
        <Col md={4} className="text-white p-1">
            <div style={{backgroundColor:props.info.backgroundColor,height:'100px',width:'350px'}} className="d-flex justify-content-center align-items-center w-100">
                <div className="mr-3">
                    {<FontAwesomeIcon size="lg" icon={props.info.icon} />}
                </div>
                <div>
                    <h4>{props.info.title}</h4>
                    <small>{props.info.description}</small>
                </div>
            </div>
        </Col>
    );
};

export default BusinessInforCard;