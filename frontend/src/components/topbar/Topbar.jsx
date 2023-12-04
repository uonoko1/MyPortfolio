import React from 'react'
import "./Topbar.css";
import { useClickContext } from '../../state/ClickContext';
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {
    const { topRef, aboutRef, profileRef, worksRef, contactRef } = useClickContext();

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };

    return (
        <div className="TopbarContainer">
            <div className="TopbarContent">
                <MenuIcon className="TopbarContentMenuIcon" />
                <img src={`${process.env.REACT_APP_API_URL_A}/assets/brandmark-design.png`} alt="brandmark-design" className="TopbarContentImg" />
                <div className="TopbarContentList">
                    <button type="button" className="TopbarContentListButton" onClick={() => scrollToRef(topRef)}>Top</button>
                    <button type="button" className="TopbarContentListButton" onClick={() => scrollToRef(aboutRef)}>About</button>
                    <button type="button" className="TopbarContentListButton" onClick={() => scrollToRef(profileRef)}>Profile</button>
                    <button type="button" className="TopbarContentListButton" onClick={() => scrollToRef(worksRef)}>Works</button>
                    <button type="button" className="TopbarContentListButton" onClick={() => scrollToRef(contactRef)}>Contact</button>
                </div>
            </div>
        </div>
    )
}
