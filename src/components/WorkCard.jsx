import React from 'react';
import './workCard.css';

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="project image" className='mockup'/>
        <h2 className='project-title'>{props.title}</h2>
    <div className="pro-details">
        <div>
            <p>{props.context}</p>
            <p>{props.resume}</p>
            <p>{props.duration}</p>
            <div>
                { props.techno1 ? <img src={props.techno1} alt="techno-logo" className='techno-logo'/>  : null } 
                { props.techno2 ? <img src={props.techno2} alt="techno-logo" className='techno-logo'/>  : null } 
                { props.techno3 ? <img src={props.techno3} alt="techno-logo" className='techno-logo'/>  : null } 
                { props.techno4 ? <img src={props.techno4} alt="techno-logo" className='techno-logo'/>  : null } 
                { props.techno5 ? <img src={props.techno5} alt="techno-logo" className='techno-logo'/>  : null } 
                { props.techno6 ? <img src={props.techno6} alt="techno-logo" className='techno-logo'/>  : null } 
                </div>
        </div>
        <div className="pro-btns">
            <a href={props.view} className={props.view  ? 'btn' : 'disabled-btn'}>
                Voir
            </a>
            <a href={props.source} className={props.source ? 'btn' : 'disabled-btn'}>
                Source
            </a>
        </div>
    </div>
</div>
)
}

export default WorkCard;