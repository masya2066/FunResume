import React from "react";
import "./contactInfoCrad.scss"

// @ts-ignore
function ContactInfoCard({iconUrl, text}) {
    const clear = text.replace("mailto:", "")
    return (
        <a href={text} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="contact-details-card">
            <div className="icon">
                <img src={iconUrl} alt=""/>
            </div>
            <div rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {clear}
            </div>
        </a>
    )

}

export default ContactInfoCard