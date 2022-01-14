import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='Footer'>
            {/* Left Side ==>*/}

            <div className="leftside">
                <div className="logotext">
                    KPG
                </div>
                <div className="lefttext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore magnam ab.
                </div>
                <div className="followus">
                    Follow Us
                    <div className="media">
                        <FacebookIcon className="Facebook"/>
                        <TwitterIcon className="Twitter"/>
                        <YouTubeIcon className='Youtube'/>
                        <InstagramIcon className='Instagram'/>
                    </div>
                </div>
            </div>

            {/* Left Middle Side */}

            <div className="contact">
                CONTACT INFO
                <div className="contacttitle">
                    Address:
                        <div className="contactdata">
                            Chandigarh University
                            Mohali, Punjab (140413)
                        </div>
                </div>
                <div className="contacttitle">
                    Phone:
                        <div className="contactdata">
                        92553 45642 Gurjot
                        72320 20120 Pranshul 
                        </div>
                </div>
                <div className="contacttitle">
                    Email:
                        <div className="contactdata">
                            ceo.gurjot@kpg.com
                            ceo.pranshul@kpg.com
                        </div>
                </div>
            </div>

            {/* Right Middle Side */}

            <div className="links">
                USEFUL LINKS
                <Link to='/' className='usefullink'>Privacy Policy</Link>
                <Link to='/' className='usefullink'>Terms & Conditions</Link>
                <Link to='/Contact' className='usefullink'>Contact Us</Link>
                <Link to='/About' className='usefullink'>Out Team</Link>
                <Link to='/About' className='usefullink'>About Us</Link>
            </div>

            {/* Maps of company */}


            {/* Bottom Line */}

            <div className="bottom">
                <span>©Copyright 2022-2023 | All Rights Reserved | KPG by Codebakerzs</span>
            </div>


        </div>
    )
};


export default Footer


/*
Left Side ==>
        1. Logo in text
        2. About company in 20 Works
        3. Follow us
            3.1. Facebook
            3.2. Twitter
            3.3. Youtube
            3.4. Instagram

Left Middle Side ==>
        1. Contact Info
            1.1. Address 
                Chandigarh Univershity
                Mohali, Punkjab (140413)
            1.2. Phone 
                92553 45642 -- Gurjot Kaur
                72320 20120 -- Pranshul Agarwal
            1.3. Email 
                ceo.gurjot@kpg.com
                ceo.pranshul@kpg.com

Right Middle Side ==>
        1. Useful Link 
            1.1. Privacy Policy
            1.2. Terms & Conditions
            1.3. Contact Us
            1.4. Our Team
            1.5. About Us 

Right Side 
        1. Map

Bottom line
*/