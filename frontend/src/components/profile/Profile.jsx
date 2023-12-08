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
                                    <p>・2022年3月31日：</p>
                                    <p className="ProfileMyHistoryLiP">関西学院大学経済学部卒業</p>
                                </li>
                                <li>
                                    <p>・2022年4月1日-2023年3月31日：</p>
                                    <p className="ProfileMyHistoryLiP">株式会社sizebook（インターネット広告代理店）に所属。インターネット広告の運用および既存顧客への営業を担当。</p>
                                </li>
                                <li>
                                    <p>・2023年4月1日-現在：</p>
                                    <p className="ProfileMyHistoryLiP">会社を退職し、フリーターとしてライブの位置情報共有サービス"LiveGT"の開発を行う。</p>
                                </li>
                            </ul>
                        </div>
                        <div className="ProfileMySkill">
                            <h2>Skills</h2>
                            <div className="ProfileMySkillContainer">

                                <div className="ProfileMySkillContentBlockLeft">
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight MySkillTopBlock window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">デザイン</h4>
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
                                            <h4 className="title-bar-text">データベース</h4>
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
                                </div>
                                <div className="ProfileMySkillContentBlockCenter">
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight MySkillTopBlock window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">フロントエンド</h4>
                                            <div className="title-bar-controls">
                                                <button aria-label="Minimize"></button>
                                                <button aria-label="Maximize"></button>
                                                <button aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="ProfileMySkillContentList">
                                            <button type="button" className="ProfileMySkillContentListButton">React.js</button>
                                            <button type="button" className="ProfileMySkillContentListButton">javascript</button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">インフラ</h4>
                                            <div className="title-bar-controls">
                                                <button aria-label="Minimize"></button>
                                                <button aria-label="Maximize"></button>
                                                <button aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="ProfileMySkillContentList">
                                            <button type="button" className="ProfileMySkillContentListButton">AWS(SES)</button>
                                            <button type="button" className="ProfileMySkillContentListButton">BackBlaze</button>
                                            <button type="button" className="ProfileMySkillContentListButton">Cloudflare</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProfileMySkillContentBlockRight">
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight MySkillTopBlock window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">バックエンド</h4>
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
                                    <div className="ProfileMySkillContent window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">DevOps/CI/CD</h4>
                                            <div className="title-bar-controls">
                                                <button aria-label="Minimize"></button>
                                                <button aria-label="Maximize"></button>
                                                <button aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="ProfileMySkillContentList">
                                            <button type="button" className="ProfileMySkillContentListButton">Ubuntu</button>
                                            <button type="button" className="ProfileMySkillContentListButton">Nginx</button>
                                            <button type="button" className="ProfileMySkillContentListButton">Prometheus・Grafana</button>
                                            <button type="button" className="ProfileMySkillContentListButton">GitHub Actions</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ProfileMySkillContentBlock">
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">デザイン</h4>
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
                                            <h4 className="title-bar-text">フロントエンド</h4>
                                            <div className="title-bar-controls">
                                                <button aria-label="Minimize"></button>
                                                <button aria-label="Maximize"></button>
                                                <button aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="ProfileMySkillContentList">
                                            <button type="button" className="ProfileMySkillContentListButton">React.js</button>
                                            <button type="button" className="ProfileMySkillContentListButton">javascript</button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">バックエンド</h4>
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
                                            <h4 className="title-bar-text">データベース</h4>
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
                                    <div className="ProfileMySkillContent ProfileMySkillContentRight window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">インフラ</h4>
                                            <div className="title-bar-controls">
                                                <button aria-label="Minimize"></button>
                                                <button aria-label="Maximize"></button>
                                                <button aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="ProfileMySkillContentList">
                                            <button type="button" className="ProfileMySkillContentListButton">AWS(SES)</button>
                                            <button type="button" className="ProfileMySkillContentListButton">BackBlaze</button>
                                            <button type="button" className="ProfileMySkillContentListButton">Cloudflare</button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContent window">
                                        <div className="ProfileMySkillContentTitle title-bar">
                                            <h4 className="title-bar-text">DevOps/CI/CD</h4>
                                            <div className="title-bar-controls">
                                                <button aria-label="Minimize"></button>
                                                <button aria-label="Maximize"></button>
                                                <button aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="ProfileMySkillContentList">
                                            <button type="button" className="ProfileMySkillContentListButton">Ubuntu</button>
                                            <button type="button" className="ProfileMySkillContentListButton">Nginx</button>
                                            <button type="button" className="ProfileMySkillContentListButton">Prometheus・Grafana</button>
                                            <button type="button" className="ProfileMySkillContentListButton">GitHub Actions</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ProfileMySkillContentWholeBlock window">
                                    <div className="ProfileMySkillContentTitle title-bar">
                                        <h3 className="title-bar-text">skills</h3>
                                        <div className="title-bar-controls">
                                            <button aria-label="Minimize"></button>
                                            <button aria-label="Maximize"></button>
                                            <button aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="ProfileMySkillContentWholeUl">
                                        <ul className="ProfileMySkillContentDiv">
                                            <li>デザイン</li>
                                            <p>HTML5/JSX</p>
                                            <p>CSS3</p>
                                            <li>バックエンド</li>
                                            <p>Node.js</p>
                                            <p>stripe</p>
                                            <li>インフラ</li>
                                            <p>AWS(SES)</p>
                                            <p>BackBlaze</p>
                                            <p>Cloudflare</p>
                                        </ul>
                                        <ul className="ProfileMySkillContentDiv">
                                            <li>フロントエンド</li>
                                            <p>React.js</p>
                                            <p>javascript</p>
                                            <li>データベース</li>
                                            <p>MongoDB</p>
                                            <li>DevOps/CI/CD</li>
                                            <p>Ubuntu</p>
                                            <p>Nginx</p>
                                            <p>Prometheus・Grafana</p>
                                            <p>Github Actions</p>

                                        </ul>
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
