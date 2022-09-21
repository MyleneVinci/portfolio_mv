import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import './workCard.css';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projets</h1>
        <div className="project-container">
            {WorkCardData.map(data => {
                return (<WorkCard 
                key={data.id}
                imgsrc={data.imgsrc}
                title={data.title}
                context={data.context}
                resume={data.resume}
                duration={data.duration}
                techno1={data.techno1}
                techno2={data.techno2}
                techno3={data.techno3}
                techno4={data.techno4}
                techno5={data.techno5}
                techno6={data.techno6}
                view={data.view}
                source={data.source}
                />
                )
            })}
        </div>
    </div>
  )
}

export default Work;