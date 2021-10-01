import './Header.css';
import React, { useState } from 'react';
import { FaHome,AiFillContacts, FaStore, BsFillInfoCircleFill, BiMenuAltRight, BsCardChecklist } from 'react-icons/all';

function Header() {

    const [nav, setNav] = useState(false);

    return (
        <div className="Header" >
            <div className="navbar">
                <div className="logo">
                    <p>
                        {/* <img src="./img/logo.webp" width="50%" alt="" /> */}
                        <h3 className='logo-text'>Azmat Seeds PVT Limited</h3>
                    </p>
                </div>

                <ul className={nav === false ? '' : 'shownav'}>
                    <li className="active"><a style={{ color: "inherit", textDecoration: 'none' }} href="/"><FaHome className='nav-icons' /> Home</a></li>
                    <li className="active"><a style={{ color: "inherit", textDecoration: 'none' }} href="#what"><BsCardChecklist className='nav-icons' /> WhatWeDo</a></li>
                    <li className="active"><a style={{ color: "inherit", textDecoration: 'none' }} href="#product"><FaStore className='nav-icons' /> Product</a></li>
                    <li className="active"><a style={{ color: "inherit", textDecoration: 'none' }} href="#about"><BsFillInfoCircleFill className='nav-icons' /> About Us</a></li>
                    <li className="active"><a style={{ color: "inherit", textDecoration: 'none' }} href="#contactUs"><AiFillContacts className='nav-icons' /> Contact Us</a></li>
                     
                </ul>
                <BiMenuAltRight className="menu" onClick={() => setNav(!nav)} />
            </div>
        </div>
    );
}

export default Header;