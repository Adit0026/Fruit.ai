import React from 'react';
import './Homepage.css';
import { FaCommentDots, FaGoogle, FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const handleTranslateClick = () => {
        navigate('/Translator');
    };

    const handleAboutClick = () => {
        navigate('/About');
    };

    const handleChatClick = () => {
        navigate('/ChatBot');
    };

    const handleFAQClick = () => {
        navigate('/FAQPage');
    };
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Fruit.ai</h1>
                <p>Fresh Fruit Fresh start!</p>
            </div>

            <div className="option-grid">
                <div className="option-box" onClick={handleChatClick} >
                    <FaCommentDots className="icon" />
                    <p>Chat</p>
                </div>

                <div className="option-box" onClick={handleTranslateClick}>
                    <FaGoogle className="icon" />
                    <p>Translate</p>
                </div>

                <div className="option-box" onClick={handleFAQClick}>
                    <FaQuestionCircle className="icon" />
                    <p>FAQs</p>
                </div>

                <div className="option-box" onClick={handleAboutClick}>
                    <FaInfoCircle className="icon" />
                    <p>About</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
