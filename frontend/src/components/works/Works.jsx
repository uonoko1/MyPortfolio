import React, { useState, useEffect, useRef } from 'react';
import Cube from '../cube/Cube';
import "./Works.css";
import { useClickContext } from '../../state/ClickContext';

export default function Works() {
    const [cubeSize, setCubeSize] = useState(0);
    const [cubePositions, setCubePositions] = useState([]);
    const { worksRef } = useClickContext();

    useEffect(() => {
        const updateSizeAndPosition = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const yPosition = screenHeight / 3;
            const xPosition = screenWidth / 3;
            const size = screenWidth / 5;
            setCubeSize(size);
            const positions = [
                { x: xPosition * 0.5, y: yPosition, data: "LiveGT" },
                { x: xPosition * 0.85, y: yPosition, data: "AdminLiveGT" },
                { x: xPosition * 1.2, y: yPosition, data: "Daichi Sakai's Portfolio" }
            ];
            setCubePositions(positions);
        };

        window.addEventListener('resize', updateSizeAndPosition);
        updateSizeAndPosition();

        return () => {
            window.removeEventListener('resize', updateSizeAndPosition);
        };
    }, []);

    return (
        <div className="WorksWrapper" ref={worksRef}>
            <div className="WorksContainer">
                <h1>Works</h1>
                <div className="WorksContent">
                    {cubePositions.map((pos, index) => (
                        <Cube
                            key={index}
                            size={cubeSize}
                            xPosition={pos.x}
                            yPosition={pos.y}
                            position={"relative"}
                            data={pos.data}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
