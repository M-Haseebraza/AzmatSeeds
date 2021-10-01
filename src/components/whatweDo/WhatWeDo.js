import React, { useEffect } from 'react';
import './whatwedo.css';
import { MdWork } from 'react-icons/md';
import Aos from 'aos';


const WhatWeDo = () => {
    // useEffect(() => {
    //     Aos.init()
      
    // }, [])
    return (
        <div className="what" id="what">
            <div data-aos="" className='whatMain'>
            <h1><MdWork style={{ verticalAlign: 'bottom',color:'green',marginBottom:'2px',fontWeight:'bold' }} /> What We Do</h1>
            <div data-aos="flip-right" className="whatContainer ">
                <div>
                    <img src="./img/s1.png" style={{ width: '60px', margin: "10px" }} alt="" />
                    <h3>Seed Farming</h3>
                    <p>The department is engaged in the production of basic seed directly and indirectly through the assistance of registered growers.</p>
                </div>
                <div>
                    <img src="./img/s2.png" style={{ width: '60px', margin: "10px" }} alt="" />
                    <h3>Seed Procurement</h3>
                    <p>The department ensures quality input for maintaining a sound system for effective distribution of quality seeds.</p>
                </div>
                <div>
                    <img src="./img/s3.png" style={{ width: '60px', margin: "10px" }} alt="" />
                    <h3>Seed Processing</h3>
                    <p>Quality seed production involves series of processes called seed chain. One of the major step at final stage.</p>
                </div>
            </div>

            </div>
           
        </div>
    );
};

export default WhatWeDo;