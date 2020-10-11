import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';


const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const dateChangeHandler = (date) => {
        setSelectedDate(date);
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppoinmentHeader dateChangeHandler={dateChangeHandler}></AppoinmentHeader>
            <BookAppoinment bookingDate={selectedDate}></BookAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;