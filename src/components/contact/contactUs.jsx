import React from 'react';
import './contact.css'
import { AiFillContacts } from 'react-icons/ai'

export default function ContactUs() {
    return (
        <div className='contact' id='contactUs'>
            <div data-aos='fade-up' className="contactmain">
            <div className='contactUsContent container-fluid p-0'>
                <h1><AiFillContacts style={{ verticalAlign: 'top', color: 'green'}} /> Contact Us</h1>
                <div className='row m-0'>
                    <div className='col-md-6'>
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7240350498805!2d73.10094551448014!3d31.421728559151685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269f34089455d%3A0xf62843e6e2f71907!2sAikSol.!5e0!3m2!1sen!2sus!4v1632985436804!5m2!1sen!2sus" width="100%" height="450" style={{borderRadius:'5px'}} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        {/* <div className="row text-center">
                            <div className="col-md-4">
                                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-map-marker"></i></a>
                                <p> Your Address ….. </p>
                            </div>
                            <div className="col-md-4">
                                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-phone"></i></a>
                                <p>+91- 90000000</p>
                            </div>
                            <div className="col-md-4">
                                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-envelope"></i></a>
                                <p> your@gmail.com</p>
                            </div>
                        </div> */}

                    </div>
                    <div className='col-md-6'>
                        <div className="row ">
                            <div className="col-md-12" >
                                <form method="post" data-form-title="CONTACT US">

                                    {/* <input type="hidden" data-form-email="true" /> */}
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn mt-3 mb-3 contactbtn ">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
            </div>
          
        </div>
    )
}