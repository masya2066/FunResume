import React from "react";
import "./contactMe.scss"
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import github from "../../images/github-color-svgrepo-com.svg"
import mail from "../../images/mail-alt-svgrepo-com.svg"
import ContactForm from "./ContactForm/ContactForm";
import linked from "../../images/linkedin-svgrepo-com.svg"

function ContactMe() {
    return (
        <section className="contact-container" id="contact">
            <h5>Contact me</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard
                        iconUrl={mail}
                        text="mailto:daniilpietrov00@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl={github}
                        text="https://github.com/masya2066"
                    />
                    <ContactInfoCard
                        iconUrl={linked}
                        text="https://linkedin.com/in/daniil-petrov-5ba084225/"
                    />
                </div>
                <div style={{flex: 1}}></div>
                <ContactForm/>
            </div>
        </section>
    )
}

export default ContactMe