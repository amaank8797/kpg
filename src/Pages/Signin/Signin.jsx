import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.jsx';

function Signin() {
    return (
        <>
            {/*HeroSeaction*/}
            <div className='heroseaction'>
                My Account  
                <div className="pagename">
                Home<span className='Myacc'> / My Account</span>    
                </div> 
            </div>

            {/* Login */}
            <div className="loginlogout">
                <div className="login">
                    <div className="login-inner">
                    <form>
                        <h3>LOGIN</h3>

                        <div className="form-group">
                            <label>Username or Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            <Link to="/">Lost Your password?</Link>
                        </p>
                    </form>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin


/*
1. HeroSeaction
2. Login 
    2.1. Username or email
    2.2. Password
    2.3. Login Button
    2.3. Remember me 
    2.4. Lost Your password?
    2.5. Facebook
    2.6. Google

3. Register
    3.1. Loream 20
    3.2. Username
    3.3. Email address
    3.4. Password 
    3.5. Loream 20
    3.6. Register Button

*/