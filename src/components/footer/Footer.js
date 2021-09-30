import './footer.css';
import React from 'react';
import {BiPhoneCall} from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='footer'>
            <p><BiPhoneCall style={{verticalAlign:"middle"}}/> +923123456</p>
            <p>&copy; Rights 2021</p>
        </div>
    );
};

export default Footer;