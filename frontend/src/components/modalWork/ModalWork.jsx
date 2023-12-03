import React, { useState } from 'react'
import "./ModalWork.css";
import { useClickContext } from '../../state/ClickContext';
import { useSpring, animated } from 'react-spring';

export default function ModalWork() {
    const { dataInfo, setDataInfo } = useClickContext();
    const [closing, setClosing] = useState(false);

    const fade = useSpring({
        opacity: closing ? 0 : (dataInfo ? 1 : 0),
        from: { opacity: 0 },
        config: { duration: 100 },
        onRest: () => {
            if (closing) {
                setDataInfo("");
                setClosing(false);
            }
        }
    });

    const scale = useSpring({
        transform: closing ? 'scale(0)' : (dataInfo ? 'scale(1)' : 'scale(0)'),
        from: { transform: 'scale(0)' },
        config: { tension: 500, friction: 40 }
    });

    const closeModal = () => {
        setClosing(true);
    }

    return (
        <animated.div style={fade} className="ModalWorkWrapper" onClick={closeModal}>
            <animated.div style={scale} className="ModalWorkContainer" onClick={(e) => e.stopPropagation()}>
                <div className="ModalWorkContent">
                    <div className="ModalWorkDescription">
                        <h3><p className="ModalWorkContentH3P">{dataInfo === "LiveGT" ? "LiveGT" : (dataInfo === "AdminLiveGT" ? "LiveGT管理システム" : "Daichi Sakai's Portfolio")}</p></h3>
                        {dataInfo === "LiveGT" ?
                            <><p className="ModalWorkContentP">ライブのリアルタイム位置情報共有サービスです。ユーザーがライブを自由に投稿でき、ユーザーは現在地の近くで開催されるライブをいつでも地図上で確認できます。MapTilerの地図タイルをleaflet.jsを使用して動かしており、ライブのチケット販売・購入にはstripeを使用しています。こちらは現在開発中で開発完了次第リリース予定です。</p><br /><p className="ModalWorkContentP testSite">※テストサイト:<a href="https://staging.livegt.net" target="_blank" rel="noopener noreferrer" className="URL">https://staging.livegt.net</a></p></>
                            : (
                                dataInfo === "AdminLiveGT" ?
                                    <p className="ModalWorkContentP">ライブのリアルタイム位置情報共有サービスであるLiveGTの管理システムです。ユーザー認証にはメールアドレス、パスワードに加えてワンタイムパスワードを導入しています。</p>
                                    :
                                    <p className="ModalWorkContentP">私、酒井大地のエンジニアポートフォリオサイトです。一部CSSにWindows 98風のデザインを再現する98.cssを使用しています。背景の立方体はReact.jsでデバイスの面積を図り、生成する立方体の個数を計算。その後、生成する立方体の個数から各立方体の配置場所を計算。立方体を表示するコンポーネントに計算した情報を引数として渡すことで背景の立方体を生成しています。立方体はhtml(jsx),cssで描画しており、animationで立方体の自転と右から左への平行移動を実現しています。Worksは立方体の6つの面に作品情報を記載することで表現しました。</p>
                            )}
                    </div>
                    <div className="ModalWorkTechnologies">
                        <h3><p className="ModalWorkContentH3P">使用技術</p></h3>

                        {dataInfo === "LiveGT" ?
                            <><p className="ModalWorkContentP">React.js,Node.js,Express.js,MongoDB,Leaflet.js,Stripe,BackBlaze,AWS(SES)</p></>
                            : (
                                dataInfo === "AdminLiveGT" ?
                                    <p className="ModalWorkContentP">React.js,Node.js,Express.js,MongoDB,Leaflet.js,Google Authenticator,AWS(SES)</p>
                                    :
                                    <p className="ModalWorkContentP">React.js,Node.js,Express.js,AWS(SES),98.css</p>
                            )}

                    </div>
                </div>
                <img src={`${process.env.REACT_APP_API_URL_A}/assets/${dataInfo === "LiveGT" ? "LiveGTImage" : (dataInfo === "AdminLiveGT" ? "AdminLiveGTImage" : "DaichiSakai'sPortfolio")}.png`} alt="WorkImg" className="ModalWorkContentImg" />
            </animated.div>
        </animated.div>
    )
}
