import React from 'react';
import Form from '../components/Form';

import PagesImg from '../components/PagesImg';

const Contact = () => {
  return (
    <div>       
      <PagesImg heading="CONTACT" text="N'hésitez pas !" className='contact'/>
      <Form />
    </div>
  )
}

export default Contact;