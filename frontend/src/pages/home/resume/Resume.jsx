import React from 'react'
import "./Resume.css";
import { useNavigate } from 'react-router-dom';

export default function Resume() {
    const navigate = useNavigate();
    return (
        <div className="ResumeWrapper">
            <div className="ResumeSidebar">
                <div className="ResumeSidebarSticky container">
                    <button type="button" className="ResumeSidebarH1" onClick={() => navigate("/")}>
                        <h1>Daichi Sakai's Portfolio</h1>
                    </button>
                    <ul className="ResumeSidebarUl">
                        <li><button type="button" className="ResumeSidebarHome" onClick={() => navigate("/")}><p>Home</p></button></li>
                        <li><a href="https://github.com/uonoko1" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a></li>
                        <li><a href="https://staging.livegt.net" target="_blank" rel="noopener noreferrer"><p>LiveGT(staging)</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="ResumeContainer container">
                <div className="ResumeContent">
                    <time className="ResumeContentTime" dateTime="2023-12-10 00:00:00 +0900 JST">2023-12-10 Sun</time>
                    <h1 className="ResumeContentTitle">職務経歴書</h1>
                    <div className="ResumeContentText">
                        <p>こんにちは、酒井大地です。</p>
                        <p>大学卒業後はベンチャーのインターネット広告代理店で広告の運用と既存顧客・新規顧客(反響)への営業を行い、現在は会社を退職してライブ情報の位置情報共有サービス"LiveGT"を個人開発しています。</p>
                        <h2>個人データ</h2>
                        <ul>
                            <li>氏名：酒井大地(Daichi Sakai)</li>
                            <li>ポートフォリオサイト：<button type="button" onClick={() => navigate("/")}><span className="ResumeURL">https://daichisakai.net</span></button></li>
                            <li>GitHub：<a href="https://github.com/uonoko1" target="_blank" rel="noopener noreferrer"><span className="ResumeURL">https://github.com/uonoko1</span></a></li>
                        </ul>
                        <h2>職務経歴(概要)</h2>
                        <ul>
                            <li>
                                個人開発(2023/04~現在)
                                <ul>
                                    <li>ライブのリアルタイム位置情報共有サービス"<a href="https://staging.livegt.net" target="_blank" rel="noopener noreferrer"><span className="ResumeURL">LiveGT(staging)</span></a>"の開発</li>
                                </ul>
                            </li>
                            <li>株式会社sizebook(2022/04~2023/03)
                                <ul>
                                    <li>リスティング広告、ディスプレイ広告等の運用</li>
                                    <li>既存顧客・新規顧客(反響)への営業</li>
                                </ul>
                            </li>
                        </ul>
                        <h2>職務経歴(詳細)</h2>
                        <h3>個人開発(2023/04~現在)</h3>
                        <p>地図上でリアルタイムにアーティストのライブ情報を探せるWebサービス"LiveGT"を一人で個人開発。
                            広告代理店時代の経験を生かしてよりモダンなUIを目指し、適切なボタン配置や各種モーダルへの導線設計を実施。
                            法的要件をクリアするため法律事務所と連携して仕様の変更や新規機能の実装などを進める。</p>
                        <h4>技術スタック</h4>
                        <ul>
                            <li>React.js&nbsp;18.2.0</li>
                            <li>Node.js&nbsp;18.13.0</li>
                            <li>Express.js&nbsp;4.18.2</li>
                            <li>MongoDB</li>
                        </ul>
                        <h4>実装に苦労した機能</h4>
                        <ul>
                            <li>
                                地図操作
                                <ul>
                                    <li>Leaflet.jsを使用してMapTilerの地図タイルを操作</li>
                                    <li>ライブハウスのリンクや都道府県をクリックすることで地図の遷移を行うが、モーダル・画面の遷移を行うたびに地図が微妙に動いてしまったり初期位置に戻るなどしたもののuseEffectで地図の移動を厳密に管理することで解消</li>
                                </ul>
                            </li>
                            <li>
                                ライブ情報のフェッチ
                                <ul>
                                    <li>必要な分のみライブ情報をフェッチするために表示する地図タイル内の座標のライブ情報のみをリクエスト</li>
                                    <li>ライブ情報を重複して取得しないよう地図タイル・ライブ情報を一意のIDで管理し、フェッチングの最適化を図る</li>
                                </ul>
                            </li>
                            <li>
                                ユーザー認証
                                <ul>
                                    <li>チケットの返金申請ステータスや申請理由を申請者とチケット販売者以外が見られないようにフェッチングのたびに認証を行い、サーバー上でDBから取得したオブジェクトを整形してレスポンス</li>
                                    <li>LiveGTの管理システムにワンタイムパスワードを導入。セキュリティを担保するため一定数以上認証に失敗すると、登録されたメールアドレスに通知を出すように設計</li>
                                </ul>
                            </li>
                            <li>
                                チケット決済
                                <ul>
                                    <li>チケット決済にはStripeを利用。チケット購入に必要なチェックアウトセッションの作成や送金・返金に関してサポートに問い合わせて導入を進める</li>
                                    <li>チケットの過剰販売を防ぐためのDBスキーマ設計や各APIに在庫確認プロセスを導入</li>
                                    <li>チケット販売者への売上金送金・送金レポートの送信ロジックの構築</li>
                                </ul>
                            </li>
                            <li>
                                チケット(QRコード)管理
                                <ul>
                                    <li>チケット購入に際してメールにimgタグでQRコードを表示するのに苦労</li>
                                    <li>セキュリティ上QRコードを画像でサーバーに保存することを避け、毎回暗号化してQRコードを発行し、QRコード認証のたびに復号する方法を採用</li>
                                </ul>
                            </li>
                            <li>
                                ライブ映像の配信
                                <ul>
                                    <li>当初はアーティストが投稿する過去のライブ映像をクラウド(BackBlaze)に保存し、リクエストに基づいてクライアントに配信する仕様をとっていたものの、データ転送量が多く、費用の面から動画配信ロジックを再検討。YouTubeを利用して動画を配信する形で着地</li>
                                </ul>
                            </li>
                            <li>
                                DB設計
                                <ul>
                                    <li>当初はライブ情報スキーマのフィールドに直接販売したチケットの情報を格納していたものの、ドキュメントサイズや拡張性の問題からチケットを別スキーマで管理</li>
                                    <li>複雑なクエリでの取得が多いスキーマに関しては検索性能を向上させるためインデックスを追加</li>
                                </ul>
                            </li>
                        </ul>
                        <h3>株式会社sizebook(2022/04~2023/03)</h3>
                        <ul>
                            <li>
                                リスティング広告、ディスプレイ広告等の運用
                                <ul>
                                    <li>広告のローテーションを回し、最適なクリエイティブや広告文、出稿キーワードを探索</li>
                                    <li>ヒートマップを用いたサイト分析、社内デザイナーへのサイト改修のディレクション</li>
                                    <li>顧客とすり合わせた予算の範囲内で適切な入札調整を実施</li>
                                </ul>
                            </li>
                            <li>
                                既存顧客・新規顧客(反響)への営業
                                <ul>
                                    <li>自身が行った広告運用に関して週次、月次で顧客にレポートを報告</li>
                                    <li>自社のリスティング広告などの反響営業。見込み顧客に対して状況をヒアリングした上で運用に関するコンサルティングを行い、契約につなげる</li>
                                </ul>
                            </li>
                        </ul>
                        <h2>自己PR</h2>
                        <ul>
                            <li>
                                実行力
                                <ul>
                                    <li>個人開発で企画、フロントエンド、バックエンド、DB設計、ビジネスロジックまで広範な領域を一人で設計。</li>
                                    <li>開発初期は技術力不足から理想とする機能を実装できない時間が長くあったものの、ChatGPTを活用し時間をかけてなんとか実装に成功。機能の実装を加えていくことで技術力の着実な積み上げを実現。</li>
                                    <li>実装ハードルの高いチケット販売・購入機能も必要な要件を網羅的に確認し、独力で実現に成功。</li>
                                </ul>
                            </li>
                            <li>
                                判断力
                                <ul>
                                    <li>当初、ライブ情報が更新されたときにWebsocketを利用したリアルタイム通信でフロントエンドのライブ情報を更新する仕様を一から勉強し、時間をかけて実装したものの、そもそもサービスの利用シーンにおけるリアルタイム通信の必要性に疑問を持ち、サーバーリソース削減の観点から迷いなく仕様の削除を実施。</li>
                                </ul>
                            </li>
                            <li>
                                想像力
                                <ul>
                                    <li>広告代理店時代に培ったユーザー視点の洞察によるUI/UX設計。</li>
                                    <li>自身がアプリケーションの想定ユーザーで、楽しんで機能の実装などができるため、よりユーザー視点に立ったアプリケーションの開発を実現。</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
