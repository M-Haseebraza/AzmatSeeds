import React from 'react';
import './contact.css'
import { AiFillContacts } from 'react-icons/ai'

export default function ContactUs() {
    return (
        <div className='contact' id='contactUs'>
            <div className='contactUsContent container-fluid p-0'>
                <h1><AiFillContacts style={{ verticalAlign: 'top', color: 'green' }} /> Contact Us</h1>
                <div className='row m-0'>
                    <div className='col-md-6'>1

                    </div>
                    <div className='col-md-6'>2

                    </div>

                </div>

            </div>
        </div>
    )
}