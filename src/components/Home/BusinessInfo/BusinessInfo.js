import React from 'react';
import { faCoffee, faClock, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row } from 'react-bootstrap';
import BusinessInforCard from '../BusinessInfoCard/BusinessInforCard';
const businessInformation = [
    {
        title: 'Opening Hours',
        description: "Lorem Ipsum is simply dummy text of the pri",
        icon: faClock,
        backgroundColor: '#1cc7c1'
    },
    {
        title: 'Visit our location',
        description: "Brooklyn, NY 10036, United States",
        icon: faMapMarker,
        backgroundColor: '#3a4256'
    },
    {
        title: 'Contact us now',
        description: "+000 123 456789",
        icon: faPhoneAlt,
        backgroundColor: '#1cc7c1'
    }
]
const BusinessInfo = () => {
    return (
        <section>
            <Container>
                <Container>
                    <Row>
                        {
                            businessInformation.map((info, index) => <BusinessInforCard key={index} info={info} ></BusinessInforCard>)
                        }
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default BusinessInfo;