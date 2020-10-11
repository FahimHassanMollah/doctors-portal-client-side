import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <ExceptionalDentalCare></ExceptionalDentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Home;