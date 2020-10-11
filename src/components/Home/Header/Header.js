import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="background-image ">
                <NavBar></NavBar>
                <HeaderMain></HeaderMain>
                <BusinessInfo></BusinessInfo>
            </div>
        </div>
    );
};

export default Header;