import React from 'react';
import PagesImg from '../components/PagesImg';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <PagesImg heading="A PROPOS" text="de qui ? de moi!" className="about-me"/>
      <AboutContent />
    </div>
  )
}

export default About;