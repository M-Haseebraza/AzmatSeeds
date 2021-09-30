import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import './About.css';
const About = () => {
    return (
        <div className="about" id="about">
            <div className="aboutContent">
                <h1> <BsFillInfoCircleFill style={{ color: 'green', verticalAlign: "bottom",marginBottom:'5px' }} /> About Us</h1>
                <h2>Welcome to Azmat Seeds Corporation!</h2>
                <p> Punjab Seed Corporation (PSC) is a semi-autonomous body of the Government of Punjab, established under Punjab Seed Corporation Act 1976. We love food. We love people. We love growing food, nourishing community and celebrating resilience with relationship and reciprocity at the center. Caring for our community, celebrating our ancestors & nourishing all generations of all species to come inspires us to jump out of bed each and every day.</p>
                <p> Punjab Seed Corporation is Pioneer in seed business of Pakistan having 43 years of experience with sound financial position and largest infrastructure. Core functions include procurement, processing, production and marketing and distribution of seeds of high quality seeds with the objective to enhance agricultural produce and make the province agriculturally self-sufficient and sustainable.</p>
                <p>  The Punjab Seed Corporation’s brand Shahzore and its Logo of a Stallion bust with the caption “Shahzor” is well known to the farming community all over the country. Presence of the PSC and Shahzor Logo on any sack of seed is the guarantee of high quality seed. Due to its effort in promoting the agriculture in Punjab and also PSC is appreciated by various national and international bodies and agencies including the World Bank and the Food and Agriculture Organization (FAO).Prices of the Punjab Seed Corporation seeds are always economical in prices and with better</p>
                {/* <button>Contact Us</button> */}
            </div>
        </div>
    );
};

export default About;