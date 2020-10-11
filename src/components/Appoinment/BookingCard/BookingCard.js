import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BookingCard = ({ data }) => {
    return (
        <div>
            <Col md={4}>
                <Card  style={{ width: '18rem' }}>
                   
                    <Card.Body className="text-center">
                        <Card.Title>{data.subject}</Card.Title>
                        <h6>
                            {data.visitingHour}
                        </h6>
                        <small>
                            {data.totalSpace}  SPACES AVAILABLE
                        </small>
                        <Button className='btn-brand'>Book appointment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default BookingCard;