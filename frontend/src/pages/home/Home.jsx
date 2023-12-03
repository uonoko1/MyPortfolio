import React from 'react'
import "./Home.css";
import Top from '../../components/top/Top';
import Profile from '../../components/profile/Profile';
import Works from '../../components/works/Works';
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';

export default function Home() {
    return (
        <div className="HomeWrapper">
            <div className="HomeContainer">
                <div className="HomeContent">
                    <Top />
                    <About />
                    <Profile />
                    <Works />
                    <Contact />
                </div>
            </div>
        </div>
    )
}
