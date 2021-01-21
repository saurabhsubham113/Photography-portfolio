import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';

function Contact() {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        e.persist();
        setInputs(inputs => (
            { ...inputs, [e.target.name]: e.target.value }
        ))
    }

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_vgnw7oe', 'template_zgolph3', e.target, 'user_92u7Ptc1jT5TQlWkJCZhy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setInputs({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <div className="contact">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-inputs">
                    <div className="contact-main">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            value={inputs.name}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={inputs.email}
                            required
                        />
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            onChange={handleChange}
                            value={inputs.subject}
                            required
                        />
                    </div>
                    <div className="contact-message">
                        <textarea
                            rows="8"
                            cols="50"
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Message..."
                            onChange={handleChange}
                            value={inputs.message}
                            required
                        />
                    </div>
                </div>
                <button className="btn">submit</button>
            </form>
        </div>
    )
}

export default Contact;
