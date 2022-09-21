import React from 'react';
import PagesImg from '../components/PagesImg';
import Work from '../components/Work';

const Projects = () => {
  return (
        <div>
          <PagesImg heading="PROJETS" text="Quelques projets" className='projects'/>
          <Work />
        </div>
  )
}

export default Projects;