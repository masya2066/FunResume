import React, {useState} from "react";
import 'material-symbols/outlined.css';
import "./navbar.scss"
import MobileNav from "./mobileNav/MobileNav";
import { Link } from 'react-scroll';


function Navbar() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">

                    <Link to="hero" spy={true} offset={-300} smooth={true} duration={1000} className="logo">
                        MASEV1CH
                    </Link>
                    <ul>
                        <li>
                            <Link to="hero" spy={true} offset={-300} smooth={true} duration={1000} className="menu-item">Home</Link>
                        </li>
                        <li>
                            <Link to="skills" spy={true} offset={-300} smooth={true} duration={1000} className="menu-item">Skills</Link>
                        </li>
                        <li>
                            <Link to="work-experience" spy={true} offset={-300} smooth={true} duration={1000} className="menu-item">Work Experience</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} offset={-300} smooth={true} duration={1000} className="menu-item">Contact</Link>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{fontSize: "1.8rem"}}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
