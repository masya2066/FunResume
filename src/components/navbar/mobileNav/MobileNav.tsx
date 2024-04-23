import React from "react";
import "./mobileNav.scss"
import {Link} from "react-scroll";

// @ts-ignore
function MobileNav ({isOpen, toggleMenu}) {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <Link onClick={toggleMenu} to="hero" spy={true} offset={-500} smooth={true} duration={1000} className="logo">
                        MASEV1CH
                    </Link>
                <ul>
                    <li>
                        <Link to="hero" spy={true} offset={-500} smooth={true} duration={1000} onClick={toggleMenu} className="menu-item">Home</Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} offset={-500} smooth={true} duration={1000} onClick={toggleMenu} className="menu-item">Skills</Link>
                    </li>
                    <li>
                        <Link to="work-experience" spy={true} offset={-500} smooth={true} duration={1000} onClick={toggleMenu} className="menu-item">Work Experience</Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} offset={-500} smooth={true} duration={1000} onClick={toggleMenu} className="menu-item">Contact Me</Link>
                    </li>
                    <button className="contact-btn" onClick={() => {}}>
                        Hire me
                    </button>
                </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav