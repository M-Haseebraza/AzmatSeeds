import React from 'react';
import './Product.css';
import { FaStore } from 'react-icons/fa'

export default function MultipleItems() {
    return (
        <div id='product' className="products" >
            <h1 style={{ margin: "25px" }}><FaStore style={{ verticalAlign: 'top', color: 'green', fontWeight: 'bold' }} /> Products</h1>
            <div className='container-fluid p-0' data-aos='flip-right'>
                <div className='row m-0 p-0'>
                    <div className="col-md-3">
                        <div class="card-sl">
                            <div class="card-image">
                                <img
                                    src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <div class="card-heading">
                                Audi Q8
                            </div>
                            <div class="card-text">
                                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div>
                            <div class="card-text">
                                $67,400
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div class="card-sl">
                            <div class="card-image">
                                <img
                                    src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <div class="card-heading">
                                Audi Q8
                            </div>
                            <div class="card-text">
                                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div>
                            <div class="card-text">
                                $67,400
                            </div>

                        </div>

                    </div>
                    <div className="col-md-3 ">
                        <div class="card-sl">
                            <div class="card-image">
                                <img
                                    src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <div class="card-heading">
                                Audi Q8
                            </div>
                            <div class="card-text">
                                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div>
                            <div class="card-text">
                                $67,400
                            </div>

                        </div>

                    </div>
                    <div className="col-md-3">
                        <div class="card-sl">
                            <div class="card-image">
                                <img
                                    src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <div class="card-heading">
                                Audi Q8
                            </div>
                            <div class="card-text">
                                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div>
                            <div class="card-text">
                                $67,400
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}





// import React, { Component } from "react";
// // import Slider from "react-slick";
// import './Product.css';
// import {FaStore} from 'react-icons/fa'
// export default class MultipleItems extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 4,
//             slidesToScroll: 2
//         };
//         return (
//             <div id='product' className="products">
//                 {/* <h1 style={{margin:"25px"}}><FaStore style={{ verticalAlign: 'top',color:'green',fontWeight:'bold'}}/> Products</h1>
//                 <Slider {...settings}>
//                     <div>
//                         <img width="90%" style={{borderRadius:"20px",margin:"0 auto"}} src="./img/veg.webp" alt=""/>
//                         <h3>Vegetables</h3>
//                     </div>
//                     <div>
//                         <img width="90%" style={{borderRadius:"20px",margin:"0 auto"}} src="./img/flow.png" alt=""/>
//                         <h3>Flowers</h3>
//                     </div>
//                     <div>
//                         <img width="90%" style={{borderRadius:"20px",margin:'0 auto'}} src="./img/apple.jpg" alt=""/>
//                         <h3>Trees</h3>
//                     </div>
//                     <div>
//                         <img width="90%" style={{borderRadius:"20px",margin:'0 auto'}} src="./img/tool.jpg" alt=""/>
//                         <h3>Tools & Supplies</h3>
//                     </div>
//                     <div>
//                         <img width="90%" style={{borderRadius:"20px",margin:'0 auto'}} src="./img/books.png" alt=""/>
//                         <h3>Books</h3>
//                     </div>
//                 </Slider> */}
//             </div>
//         );
//     }
// }