import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import { FaWindows } from 'react-icons/fa';



const Form = () => {

    const init =() => {
        emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
    };

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE,
            refForm.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
            () => {
                alert('Message envoyé')
                window.location.reload()
            },
            () => {
                alert('Message non envoyé veuillez réessayer')
            }
        )
    }

  return (
    <div className='form'>
        <form ref={refForm} onSubmit={sendEmail}>
            <label htmlFor="">Votre Nom</label>
            <input type="text" name='name'/>
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" />
            <label htmlFor="">Objet</label>
            <input type="text" name='subject' />
            <label htmlFor="">Message</label>
            <textarea rows="6" placeholder='Tapez votre message' required name='message'></textarea>
            <input type="submit" value='Envoyer' className='btn' />
        </form>
    </div >
  )
}

export default Form