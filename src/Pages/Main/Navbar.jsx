import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="navbar">

                {/* Logo */}

                <div className="logo&text">
                    <i className="logo"></i>
                    <h1>KPG</h1>
                </div>

                {/* Home, Catageries, Conatct, About */}

                <div className="navlink">
                    <ul className="navlinks" >
                        <li className="navitem">
                            <Link to='/' className="navlink">
                                Home
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link to='/Categories' className="navlink">
                                Catagories
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link to='/Contact' className="navlink">
                                Contact
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link to='/About' className="navlink">
                                About Us
                            </Link>
                        </li>
                    </ul>

                    {/* Button ==>  Beccame a Seller, Login */}
                    <div className="button">
                        <button className="Button1"> Became a Seller</button>
                        <button className="Button2"> Login</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar


/*
1. Logo 
2. Text
3. Home
4. Categories
    4.1. Pulses
    4.2. Vegetables
5. Contact
6. Become A Seller
7. Login 

*/