import React from 'react';
import { Link } from 'react-router-dom';
import bgIntro from '../assets/bgIntro.jpg';

import './introImg.css'

const IntroImg = () => {
  return (
    <div className='intro'>
        <div className="mask">
            <img src={bgIntro} alt="fond d'ecran intro" className="intro-img" />
        </div>
        <div className="content">
            <p>salut, mon nom est Mylène Vinci et je suis développeur web</p>
            <h1>Développeur React et NodeJS</h1>
            <div>
                <Link to='/projets' className='btn'>
                    Projets
                </Link>
                <Link to='/contact' className='btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default IntroImg;