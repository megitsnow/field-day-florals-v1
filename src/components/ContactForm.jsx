import {useRef,React} from 'react'
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v1v4oaw', 'template_hrigd8i', form.current, 'aU5Vn9cDDgAytPtBZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div id="contact" className = "bt-5 formFont d-flex flex-column align-items-center justify-content-center">
            <h1 className = "text-center contactFormHeading">Let's Work Together!</h1>
            <p className = "contactInfoParagraph">We are so thrilled that you are considering working with us! Please fill out the form below and we will get back to you in two business days!</p>
                <div >
                <form ref = {form} onSubmit = {sendEmail} formWidth>
                    <div class = "form-group row">
                        <input type = "text" className = "mb-2 w-48 me-2"
                        placeholder = "Full Name"
                        name = "user_name" required/>
                        <input type = "email" className = "mb-2 w-48"
                        placeholder = "Email"
                        name = "user_email" required/>
                    </div>
                    <div class = "form-group row">
                        <input type = "text" className = "mb-2 w-48"
                        placeholder = "Subject"
                        name = "subject" required/>
                    </div>
                    <div class = "form-group row mb-2 w-48">
                        <textarea
                        name = "message"
                        placeholder = "Let me know all the deets!"
                        rows = "7" required/>
                    </div>
                    <div>
                        <button type ="submit" className = "btn btn-outline-secondary">Send Message</button>
                    </div>
                </form>
                </div>
        </div>
    )
}

