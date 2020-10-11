import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceInfoCard from '../ServiceInfoCard/ServiceInfoCard';
import fluorideTreatment from '../../images/fluorideTreatment.png';
import teethWhiting from '../../images/teethWhiting.png';
import cavityFilling from '../../images/cavityFilling.png';

const service =[
    {
        title:'Fluoride Treatment',
        description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        image:fluorideTreatment
    },
    {
        title:'Cavity Filling',
        description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        image:teethWhiting
    },
    {
        title:'Teath Whitening',
        description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        image:cavityFilling
    },
]
const Service = () => {
    return (
        <div>
            <Container className="mt-5 pt-4">
                <div className="text-center">
                    <h6 style={{color:'#1cc7c1'}}>OUR SERVICES</h6>
                    <h2 className="pt-2" style={{color:"#3a4256"}}>Services We Provide</h2>
                </div>
                <Row>
                    {
                        service.map((info,index)=><ServiceInfoCard info={info} key={index}></ServiceInfoCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;