import React from 'react';
import './slider.css';
// import Slider from "react-slick";
const DemoCarousel = () => {
    return (
        <>
            <div className="  slider-main">
            </div>
            <div data-aos='fade-right' className='sliderText' >
                <h1>We Provide Quality Seeds</h1>
                <h2>With Better Yeild</h2>

            </div>
        </>
        // <Carousel showArrows={true} autoPlay={true} dynamicHeight="100%" infiniteLoop={true} showThumbs={false}>
        //         <div>
        //             <img style={{width:"100%"}} src="./img/3.jpg" alt="" />
        //         </div>
        //         <div>
        //             <img style={{width:"100%"}} src="./img/2.jpg" alt="" />
        //         </div>
        //         <div>
        //             <img style={{width:"100%"}}  src="./img/1.jpg" alt="" />
        //         </div>
        //     </Carousel>
    );
}
export default DemoCarousel;