import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss'

const Contact = () => {
    const refForm = useRef()


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_wsuo1ip', 
            'template_mc8b4er', refForm.current, 
            '2m0czvZEu1ESUnjRU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })}
    

    return (
        <div className="container contact-page">
        <div className="text-area">
            <h1> Contact Me</h1>
            <h2>Here are my details</h2>
            <p>Here is some text</p>

            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
    
                    <ul>
                        <li className="half">
                            <input type="text" name="user_name" placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input type="email" name="user_email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>\<textarea placeholder="message" name="message" required> </textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND" />
                        </li>

                    </ul>
                </form>
            </div>
        </div>

        </div>
    )
}

export default Contact