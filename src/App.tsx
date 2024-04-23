import React, { useEffect, useRef, useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./App.scss"
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";

function App() {
    const cursorFollower = useRef<HTMLDivElement>(null);

    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const cursorFollowerSize = 20;

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setCursorX(e.clientX);
            setCursorY(e.clientY);
        });
    }, []);

    useEffect(() => {
        if (cursorFollower.current) {
            cursorFollower.current.style.left = `${cursorX}px`;
            cursorFollower.current.style.top = `${cursorY}px`;
            cursorFollower.current.style.transform = `translate(-50%, -50%)`;
        }
    }, [cursorX, cursorY]);

    return (
        <>
            <div className="cursor-follower" ref={cursorFollower}></div>
            <Navbar/>
            <div className="app-container">
                <Hero/>
                <Skills/>
                <WorkExperience/>
                <ContactMe/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
