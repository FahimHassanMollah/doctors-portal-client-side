import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';

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