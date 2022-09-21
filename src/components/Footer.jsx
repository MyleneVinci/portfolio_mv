import React from 'react';
import { FaHome, FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="left">
                    <div className="location">
                        <p><FaHome size={20} style={{ color:'#fff', marginRight: '2rem' }} />13009 Marseille</p>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color:'#fff', marginRight: '2rem' }} />mylene.vinci@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <div className="social-media">
                        <h4>Retrouvez-moi sur :</h4>
                        <a href="https://www.linkedin.com/in/mylene-vinci/"><FaLinkedin size={30} style={{ color:'#fff', marginRight: '1rem' }} /></a>
                        <a href="https://github.com/MyleneVinci"><FaGithub size={30} style={{ color:'#fff', marginRight: '1rem' }} /></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h4>Réalisé par Mylène Vinci</h4>
            </div>
        </div>
    ) 
}

export default Footer;