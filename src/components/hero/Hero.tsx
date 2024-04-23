import React from "react";
import avatar from '../../images/telegram-cloud-photo-size-2-3366782395154016179-c.jpg';
import js from '../../images/logo-javascript.svg';
import postgres from "../../images/postgresql.svg";
import nginx from "../../images/nginx-1.svg";
import ts from "../../images/typescript.svg";
import golang from "../../images/go-8.svg";
import linux from "../../images/tux.svg"
import "./hero.scss"

function Hero() {
    return (
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <h2>
                    Crafting Excellence for Tomorrow
                </h2>
                <p>
                    Automation QA Engineer | Driving Quality Assurance Engineering to New Heights: Crafting Seamless, Scalable, and Resilient Solutions for Enhanced Performance and Client Satisfaction
                </p>
            </div>

            <div className="hero-img">
                <div className="tech-icons">
                    <div className="left-tech">
                        <div className="tech-icon">
                            <img src={linux} alt=""/>
                        </div>
                        <div className="tech-icon">
                            <img src={nginx} alt=""/>
                        </div>
                        <div className="tech-icon">
                            <img src={postgres} alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <img className="avatarImg" src={avatar} alt=""/>
                    </div>
                    <div className="tech-icons">
                        <div className="tech-icon">
                            <img src={ts} alt=""/>
                        </div>
                        <div className="tech-icon">
                             <img src={js} alt=""/>
                        </div>
                        <div className="tech-icon">
                            <img src={golang} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
</ section>
    )
}

export default Hero;