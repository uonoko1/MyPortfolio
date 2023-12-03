import React, { useRef } from 'react'
import "./Profile.css";
import "98.css";
import { useClickContext } from '../../state/ClickContext';

export default function Profile() {
    const { profileRef } = useClickContext();
    return (
        <div className="ProfileWrapper" ref={profileRef}>
            <div className="ProfileContainer">
                <h1>Profile</h1>
                <div className="ProfileContent">
                    <img src={`${process.env.REACT_APP_API_URL_A}/assets/PortfolioProfileImg.jpg`} alt="" className="ProfileContainImg" />
                    <div className="ProfileMyHistoryAndMySkill">
                        <div className="ProfileMyHistory">
                            <h2>Job History</h2>
                            <ul className="ProfileMyHistoryUl">
                                <li>
                                    <p><span className="ProfileMyHistoryLiSpan">2022年3月31日</span><span className="colon">：</span></p>
                                    <p>関西学院大学経済学部卒業</p>
                                </li>
                                <li>
                                    <p><span className="ProfileMyHistoryLiSpan">2022年4月1日-2023年3月31日</span><span className="colon">：</span></p>
                                    <p>株式会社sizebook（インターネット広告代理店）に所属。インターネット広告の運用および既存顧客への営業を担当。</p>
                                </li>
                                <li>
                                    <p><span className="ProfileMyHistoryLiSpan">2023年4月1日-現在</span><span className="colon">：</span></p>
                                    <p>会社を退職し、フリーターとしてライブの位置情報共有サービス"LiveGT"の開発を行う。</p>
                                </li>
                            </ul>
                        </div>
                        <div className="ProfileMySkill">
                            <h2>Skills</h2>
                            <div className="ProfileMySkillContainer">
                                <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                    <div className="ProfileMySkillContentTitle title-bar">
                                        <h3 className="title-bar-text">デザイン</h3>
                                        <div className="title-bar-controls">
                                            <button aria-label="Minimize"></button>
                                            <button aria-label="Maximize"></button>
                                            <button aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContentList">
                                        <button type="button" className="ProfileMySkillContentListButton">HTML5/JSX</button>
                                        <button type="button" className="ProfileMySkillContentListButton">CSS3</button>
                                    </div>
                                </div>
                                <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                    <div className="ProfileMySkillContentTitle title-bar">
                                        <h3 className="title-bar-text">フロントエンド</h3>
                                        <div className="title-bar-controls">
                                            <button aria-label="Minimize"></button>
                                            <button aria-label="Maximize"></button>
                                            <button aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContentList">
                                        <button type="button" className="ProfileMySkillContentListButton">React.js</button>
                                        <button type="button" className="ProfileMySkillContentListButton">javascript</button>
                                        <button type="button" className="ProfileMySkillContentListButton">stripe</button>
                                    </div>
                                </div>
                                <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                    <div className="ProfileMySkillContentTitle title-bar">
                                        <h3 className="title-bar-text">バックエンド</h3>
                                        <div className="title-bar-controls">
                                            <button aria-label="Minimize"></button>
                                            <button aria-label="Maximize"></button>
                                            <button aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContentList">
                                        <button type="button" className="ProfileMySkillContentListButton">Node.js</button>
                                        <button type="button" className="ProfileMySkillContentListButton">stripe</button>
                                    </div>
                                </div>
                                <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                    <div className="ProfileMySkillContentTitle title-bar">
                                        <h3 className="title-bar-text">データベース</h3>
                                        <div className="title-bar-controls">
                                            <button aria-label="Minimize"></button>
                                            <button aria-label="Maximize"></button>
                                            <button aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContentList">
                                        <button type="button" className="ProfileMySkillContentListButton">MongoDB</button>
                                    </div>
                                </div>
                                <div className="ProfileMySkillContent window">
                                    <div className="ProfileMySkillContentTitle title-bar">
                                        <h3 className="title-bar-text">インフラ</h3>
                                        <div className="title-bar-controls">
                                            <button aria-label="Minimize"></button>
                                            <button aria-label="Maximize"></button>
                                            <button aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContentList">
                                        <button type="button" className="ProfileMySkillContentListButton">Nginx</button>
                                        <button type="button" className="ProfileMySkillContentListButton">AWS(SES)</button>
                                        <button type="button" className="ProfileMySkillContentListButton">BackBlaze</button>
                                        <button type="button" className="ProfileMySkillContentListButton">Prometheus・Grafana</button>
                                        <button type="button" className="ProfileMySkillContentListButton">Cloudflare</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
