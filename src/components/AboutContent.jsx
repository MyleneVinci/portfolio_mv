import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import './aboutContent.css';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="about-intro">
            <h1>Qui suis-je?</h1>
            <p>Je m'appelle Mylène Vinci et je suis développeur web, spécialisée React et NodeJS</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="about-content">
            <div>
                <img src={avatar} alt="photo d'identité" className='avatar' />                
            </div>
            <div className='career'>
                <h2>Mon parcours</h2>
                <p>Après 10 ans dans un laboratoire d'analyse d'amiante, j'ai choisi de découvrir de nouveaux horizons, et d'entreprendre une reconversion professionnelle dans un domaine alliant rigueur et créativité : le développement web.</p>
                <p>Diplômée d'un Master en techniques d'analyses physico-chimiques, j'ai suivi une formation de 5 mois à la Wild Code School</p>
            </div>
            <div className='soft-skills'>
                <h2>Mes Soft Skills</h2>
                <ul>
                    <li>Travail d'équipe</li>
                    <li>Autonomie</li>
                    <li>Adaptabilité</li>
                    <li>Rigueur</li>
                    <li>Curiosité</li>
                </ul>
            </div>
            <div className='hard-skills'>
                <h2>Mes Hard Skills</h2>
                <p>Les technologies avec lesquelles je travaille :</p>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default AboutContent;