import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="background-image ">
                <NavBar></NavBar>
                <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;