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
            const xPosition = screenWidth / 3;
            const yPosition = screenHeight / 3;
            let size;
            if (screenWidth >= 1100) {
                size = screenWidth / 5;
            } else if (screenWidth < 1100 && screenWidth >= 1000) {
                size = screenWidth / 5;
            } else if (screenWidth < 1000 && screenWidth >= 600) {
                size = screenWidth / 4;
            } else if (screenWidth < 600 && screenWidth >= 500) {
                size = screenWidth / 3.5;
            } else if (screenWidth < 500 && screenWidth >= 440) {
                size = screenWidth / 3.2;
            } else {
                size = screenWidth / 3;
            }
            setCubeSize(size);
            let positions;
            if (screenWidth >= 1100) {
                positions = [
                    { x: xPosition * 0.5, y: yPosition, data: "LiveGT" },
                    { x: xPosition * 0.85, y: yPosition, data: "AdminLiveGT" },
                    { x: xPosition * 1.2, y: yPosition, data: "Daichi Sakai's Portfolio" }
                ];
            } else if (screenWidth < 1100 && screenWidth >= 1000) {
                positions = [
                    { x: xPosition * 0.75, y: yPosition * 0.6, data: "LiveGT" },
                    { x: xPosition * 0.80, y: yPosition * 1.4, data: "AdminLiveGT" },
                    { x: xPosition * 0.95, y: yPosition * 0.6, data: "Daichi Sakai's Portfolio" }
                ];
            } else if (screenWidth < 1000 && screenWidth >= 600) {
                positions = [
                    { x: xPosition * 0.6, y: yPosition * 0.6, data: "LiveGT" },
                    { x: xPosition * 0.70, y: yPosition * 1.5, data: "AdminLiveGT" },
                    { x: xPosition * 0.80, y: yPosition * 0.6, data: "Daichi Sakai's Portfolio" }
                ];
            } else if (screenWidth < 600 && screenWidth >= 500) {
                positions = [
                    { x: xPosition * 0.6, y: yPosition * 0.6, data: "LiveGT" },
                    { x: xPosition * 0.55, y: yPosition * 1.6, data: "AdminLiveGT" },
                    { x: xPosition * 0.42, y: yPosition * 0.6, data: "Daichi Sakai's Portfolio" }
                ];
            } else if (screenWidth < 600 && screenWidth >= 500) {
                positions = [
                    { x: xPosition * 0.62, y: yPosition * 0.6, data: "LiveGT" },
                    { x: xPosition * 0.45, y: yPosition * 1.4, data: "AdminLiveGT" },
                    { x: xPosition * 0.22, y: yPosition * 0.6, data: "Daichi Sakai's Portfolio" }
                ];
            } else {
                positions = [
                    { x: xPosition * 0.62, y: yPosition * 0.6, data: "LiveGT" },
                    { x: xPosition * 0.43, y: yPosition * 1.4, data: "AdminLiveGT" },
                    { x: xPosition * 0.22, y: yPosition * 0.6, data: "Daichi Sakai's Portfolio" }
                ];
            }
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
