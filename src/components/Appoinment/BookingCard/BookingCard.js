import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingCard = ({ data,bookingDate }) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div>
            <Col md={4} className="my-3">
                <Card  border='secondary' style={{ width: '18rem' }}>
                   
                    <Card.Body className="text-center">
                        <h4 style={{color:"#1cc7c1"}}>{data.subject}</h4>
                        <h6>
                            {data.visitingHour}
                        </h6>
                        <small>
                            {data.totalSpace}  SPACES AVAILABLE
                        </small>
                        <button onClick={openModal} className='btn-brand mt-2'>Book appointment</button>
                        <AppoinmentForm bookingDate={bookingDate} disiceaseName={data.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppoinmentForm>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default BookingCard;