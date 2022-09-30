import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './form.css';



const Form = () => {

    const init =() => {
        emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
    };

    const navigate = useNavigate();

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
                toast.success("Message envoyé")
                navigate('/')
            },
            () => {
                toast.error('Message non envoyé veuillez réessayer svp')
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