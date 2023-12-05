import React, { useState } from 'react'
import "./ModalMenu.css";
import { useClickContext } from '../../state/ClickContext';
import { animated, useSpring } from 'react-spring';

export default function ModalMenu() {
    const { modalMenu, setModalMenu, topRef, aboutRef, profileRef, worksRef, contactRef } = useClickContext();
    const [closing, setClosing] = useState(false);

    const fade = useSpring({
        opacity: closing ? 0 : (modalMenu ? 1 : 0),
        from: { opacity: 0 },
        config: { duration: 100 },
        onRest: () => {
            if (closing) {
                setModalMenu(false);
                setClosing(false);
            }
        }
    });

    const slide = useSpring({
        transform: closing ? 'translateX(-100%)' : (modalMenu ? 'translateX(0%)' : 'translateX(-100%)'),
        from: { transform: 'translateX(-100%)' },
        config: { tension: 270, friction: 30 }
    });

    const closeMenu = () => {
        setClosing(true);
    };

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
            closeMenu();
        }
    };

    return (
        <animated.div className="ModalMenuWrapper" onClick={closeMenu} style={fade}>
            <animated.div className="ModalMenuContainer" onClick={(e) => e.stopPropagation()} style={slide}>
                <div className="ModalMenuContent">
                    <div className="ModalMenuContentTitle">
                        <img src={`${process.env.REACT_APP_API_URL_A}/assets/brandmark-design.png`} alt="" className="ModalMenuContentTitleImg" />
                        <h3>Daichi Sakai's Portfolio</h3>
                    </div>
                    <ul className="ModalMenuContentUl">
                        <li className="ModalMenuContentLi">
                            <button type="button" className="ModalMenuContentLiButton" onClick={() => scrollToRef(topRef)}>Top</button>
                        </li>
                        <li className="ModalMenuContentLi">
                            <button type="button" className="ModalMenuContentLiButton" onClick={() => scrollToRef(aboutRef)}>About</button>
                        </li>
                        <li className="ModalMenuContentLi">
                            <button type="button" className="ModalMenuContentLiButton" onClick={() => scrollToRef(profileRef)}>Profile</button>
                        </li>
                        <li className="ModalMenuContentLi">
                            <button type="button" className="ModalMenuContentLiButton" onClick={() => scrollToRef(worksRef)}>Works</button>
                        </li>
                        <li className="ModalMenuContentLi">
                            <button type="button" className="ModalMenuContentLiButton" onClick={() => scrollToRef(contactRef)}>Contact</button>
                        </li>
                    </ul>
                </div>
            </animated.div>
        </animated.div>
    )
}
