import React from "react";
import "./contactFrom.scss"

function ContactForm() {
    return (
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <div className="name-container">
                <input type="text" className="email-input" name="email" placeholder="Email"/>
                </div>
                <textarea name="message" placeholder="Message" rows={3} />
                <button>SEND</button>
            </form>
        </div>
    )
}

export default ContactForm;
