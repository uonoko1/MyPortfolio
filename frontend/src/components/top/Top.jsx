import React, { useRef } from 'react'
import "./Top.css";
import { useClickContext } from '../../state/ClickContext';

export default function Top() {
    const { topRef } = useClickContext();
    return (
        <div className="TopWrapper" ref={topRef}>
            <div className="TopContainer">
                <h1>Welcome.<br /> I'm Daichi Sakai,<br /> an Engineer.</h1>
            </div>
        </div>
    )
}
