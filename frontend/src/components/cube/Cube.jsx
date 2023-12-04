import React, { useState } from 'react'
import "./Cube.css";
import { animated, config, useSpring } from 'react-spring';
import { useClickContext } from '../../state/ClickContext';

export default function Cube({ size, xPosition, yPosition, position, data }) {
    const { setDataInfo } = useClickContext();
    const sceneStyle = {
        width: `${size}px`,
        height: `${size}px`,
        position: `${position}`,
        left: `${xPosition}px`,
        top: `${yPosition}px`,
        animation: position == 'fixed' ? "flowRightToLeft 30s linear infinite" : undefined,
    };

    const boxBaseStyle = {
        width: `${size}px`,
        height: `${size}px`,
        animation: "turnAround 30s linear 0s infinite normal none running"
    };

    const top = {
        "transform": `translateY(${size / 2}px) rotateX(-90deg)`
    }

    const bottom = {
        "transform": `translateY(-${size / 2}px) rotateX(90deg)`
    }

    const front = {
        "transform": `translateZ(${size / 2}px)`
    }

    const back = {
        "transform": `translateZ(-${size / 2}px) rotateX(180deg)`
    }

    const left = {
        "transform": `translateX(-${size / 2}px) rotateY(-90deg)`
    }

    const right = {
        "transform": `translateX(${size / 2}px) rotateY(90deg)`
    }

    const [click, setClick] = useState(false);

    const turnAround = useSpring({
        to: click ? { transform: 'rotateY(720deg)' } : { transform: 'rotateY(0deg)' },
        from: { transform: 'rotateY(0deg)' },
        reset: true,
        onRest: () => {
            if (click) {
                setDataInfo(data);
                setClick(false);
            }
        },
    });

    const handleClick = () => {
        setClick(true);
    };

    if (position === "fixed") {
        return (
            <div id="scene" style={sceneStyle}>
                <div className="boxBase" style={boxBaseStyle}>
                    <div className="top" style={top}></div>
                    <div className="bottom" style={bottom}></div>
                    <div className="front" style={front}></div>
                    <div className="back" style={back}></div>
                    <div className="left" style={left}></div>
                    <div className="right" style={right}></div>
                </div>
            </div>
        )
    } else {
        return (
            <button type="button" className='WorksContentButton' id="scene" style={sceneStyle} onClick={handleClick}>
                <div className="boxBase boxBaseButton" style={boxBaseStyle}>
                    <animated.div className="turnAround boxBase" style={turnAround}>
                        <div className="top" style={top}>
                            <div className="CubeContainer">
                                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${data === "LiveGT" ? "LiveGTImage" : (data === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="WorkImg" className="CubeContentImg" />
                                <p className="CubeContent">{data === "LiveGT" ? "LiveGT" : (data === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p>
                                <div className="CubeContentDiv">
                                    <p className="CubeContentP">{data === "LiveGT" ? "ライブのリアルタイム位置情報共有サービス" : (data === "AdminLiveGT" ? "LiveGTの管理システム" : "酒井大地のエンジニアポートフォリオ")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom" style={bottom}>
                            <div className="CubeContainer">
                                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${data === "LiveGT" ? "LiveGTImage" : (data === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="" className="CubeContentImg" />
                                <p className="CubeContent">{data === "LiveGT" ? "LiveGT" : (data === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p>
                                <div className="CubeContentDiv">
                                    <p className="CubeContentP">{data === "LiveGT" ? "ライブのリアルタイム位置情報共有サービス" : (data === "AdminLiveGT" ? "LiveGTの管理システム" : "酒井大地のエンジニアポートフォリオ")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="front" style={front}>
                            <div className="CubeContainer">
                                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${data === "LiveGT" ? "LiveGTImage" : (data === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="" className="CubeContentImg" />
                                <p className="CubeContent">{data === "LiveGT" ? "LiveGT" : (data === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p>
                                <div className="CubeContentDiv">
                                    <p className="CubeContentP">{data === "LiveGT" ? "ライブのリアルタイム位置情報共有サービス" : (data === "AdminLiveGT" ? "LiveGTの管理システム" : "酒井大地のエンジニアポートフォリオ")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="back" style={back}>
                            <div className="CubeContainer">
                                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${data === "LiveGT" ? "LiveGTImage" : (data === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="" className="CubeContentImg" />
                                <p className="CubeContent">{data === "LiveGT" ? "LiveGT" : (data === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p>
                                <div className="CubeContentDiv">
                                    <p className="CubeContentP">{data === "LiveGT" ? "ライブのリアルタイム位置情報共有サービス" : (data === "AdminLiveGT" ? "LiveGTの管理システム" : "酒井大地のエンジニアポートフォリオ")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="left" style={left}>
                            <div className="CubeContainer">
                                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${data === "LiveGT" ? "LiveGTImage" : (data === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="" className="CubeContentImg" />
                                <p className="CubeContent">{data === "LiveGT" ? "LiveGT" : (data === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p>
                                <div className="CubeContentDiv">
                                    <p className="CubeContentP">{data === "LiveGT" ? "ライブのリアルタイム位置情報共有サービス" : (data === "AdminLiveGT" ? "LiveGTの管理システム" : "酒井大地のエンジニアポートフォリオ")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="right" style={right}>
                            <div className="CubeContainer">
                                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${data === "LiveGT" ? "LiveGTImage" : (data === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="" className="CubeContentImg" />
                                <p className="CubeContent">{data === "LiveGT" ? "LiveGT" : (data === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p>
                                <div className="CubeContentDiv">
                                    <p className="CubeContentP">{data === "LiveGT" ? "ライブのリアルタイム位置情報共有サービス" : (data === "AdminLiveGT" ? "LiveGTの管理システム" : "酒井大地のエンジニアポートフォリオ")}</p>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </button>
        )
    }
}
