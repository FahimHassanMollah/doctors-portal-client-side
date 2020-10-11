import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <ExceptionalDentalCare></ExceptionalDentalCare>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;