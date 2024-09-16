import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {

    const [action, setAction] = useState('');
    const navigate = useNavigate();

    const registerlink = () => {
        setAction('active');
    }

    const loginlink = () => {
        setAction('');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div className={`wrapper ${action}`}>
            <div className='form-box login'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required />
                        <FaUser className='icon1' />
                    </div>
                    <div className='input-box'>
                        <input type='Password' placeholder='Password' required />
                        <FaLock className='icon1' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='Checkbox' />
                            Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href='#' onClick={registerlink}>Register</a></p>
                    </div>

                    {/* Social Media Icons for Login */}
                    <div className="social-login">
                        <p>Or login with:</p>
                        <div className="social-icons">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-google"></i>
                            </a>
                            <a
                                href="https://www.pinterest.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <div className='form-box register'>
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon1' />
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required />
                        <FaEnvelope className='icon1' />
                    </div>
                    <div className='input-box'>
                        <input type='Password' placeholder='Password' required />
                        <FaLock className='icon1' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='Checkbox' />
                            I agree to the terms & conditions</label>
                    </div>
                    <button type='submit'>Register</button>

                    <div className='register-link'>
                        <p>Already have an account? <a href='#' onClick={loginlink}>Login</a></p>
                    </div>

                    <div className="social-register">
                        <p>Or register with:</p>
                        <div className="social-icons">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-google"></i>
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginRegister;
