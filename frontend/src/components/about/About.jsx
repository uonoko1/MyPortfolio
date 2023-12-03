import React, { useRef } from 'react'
import "./About.css";
import { useClickContext } from '../../state/ClickContext';

export default function About() {
    const { aboutRef } = useClickContext();
    return (
        <div className="AboutWrapper" ref={aboutRef}>
            <div className="AboutContainer">
                <h1>About</h1>
                <div className="AboutContent">
                    <p>私はライブのリアルタイム位置情報共有サービス"LiveGT"の開発でエンジニアとしての第一歩を踏み出しました。</p>
                    <p>エンジニアリング未経験の私を駆り立てたのは自分の琴線に触れる音楽を探求できる、自由に開かれたプラットフォームをつくる野望だけでした。</p>
                    <p>私がエンジニアリングを行う最大の動機は自分自身のクリエイティブの追求であり、知的好奇心の純粋な探求であります。</p>
                    <p>ここでは私、酒井大地の職歴、使用技術および作品の紹介をいたします。</p>
                    <p>ゆっくりご覧になってください。</p>
                </div>
            </div>
        </div>
    )
}
