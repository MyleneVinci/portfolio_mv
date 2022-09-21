import React from 'react';

import './pagesImg.css';

const PagesImg = ({ heading, text, className}) => {
  return (
    <div className={`pages-img ${className}`}>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default PagesImg;