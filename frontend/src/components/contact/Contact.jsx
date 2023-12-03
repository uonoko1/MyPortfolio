import React, { useState } from 'react'
import "./Contact.css";
import { useClickContext } from '../../state/ClickContext';
import axios from 'axios';
import emailValidator from 'email-validator';
import { TailSpin } from "react-loader-spinner";

export default function Contact() {
    const { contactRef } = useClickContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [submitConfirm, setSubmitConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false); // 新しいステートを追加

    const validateAndSubmit = () => {
        if (!name || !comment) return;
        if (emailValidator.validate(email)) {
            setSubmitConfirm(true);
            setInvalidEmail(false); // メールが有効なら警告を非表示
        } else {
            setInvalidEmail(true); // メールが無効なら警告を表示
            setTimeout(() => {
                setInvalidEmail(false);
            }, 10000)
        }
    };

    const resetButton = (e) => {
        if (e) e.stopPropagation();
        if (name !== "") setName("");
        if (email !== "") setEmail("");
        if (comment !== "") setComment("");
        if (invalidEmail) setInvalidEmail(false);
    }

    const onSubmit = async () => {
        if (!name || !email || !comment) return;
        if (!emailValidator.validate(email)) {
            setInvalidEmail(true); // メールが無効なら警告を表示
            return;
        }
        try {
            setIsLoading(true)
            await axios.post(`${process.env.REACT_APP_API_URL}/sendEmail`, {
                name: name,
                email: email,
                comment: comment
            });
            setSendSuccess(true);
            resetButton();
            setSubmitConfirm(false);
            setTimeout(() => {
                setSendSuccess(false);
            }, 10000);
        } catch (err) {
            console.log("err:", err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="ContactWrapper" ref={contactRef}>
            <div className="ContactContainer">
                <h1>Contact</h1>
                <div className="ContactContentWrapper">
                    <form className="ContactContent window">
                        <div className="ContactContentTitle title-bar">
                            <h3 className="title-bar-text">Contact</h3>
                            <div className="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="ContactContentDiv">
                            {sendSuccess ?
                                <p>メッセージの送信が成功しました。</p>
                                :
                                <>
                                    {invalidEmail && <p className="error-message">正しいメールアドレスを入力してください。</p>}
                                    <div className="ContactContentDivNameAndEmail">
                                        <div className="ContactContentDivName">
                                            <p className="ContactContentP">Name</p>
                                            {submitConfirm ?
                                                <p className="ContactContentInputP">{name}</p>
                                                :
                                                <input type="text" className="ContactContentNameInput" onChange={(e) => setName(e.target.value)} value={name} />
                                            }
                                        </div>
                                        <div className="ContactContentDivEmail">
                                            <p className="ContactContentP">Email</p>
                                            {submitConfirm ?
                                                <p className="ContactContentInputP">{email}</p>
                                                :
                                                <input type="text" className="ContactContentEmailInput" onChange={(e) => setEmail(e.target.value)} value={email} />
                                            }
                                        </div>
                                    </div>
                                    <div className="ContactContentDivComment">
                                        <p className="ContactContentP">Comment</p>
                                        {submitConfirm ?
                                            <p className="ContactContentInputP">{comment}</p>
                                            :
                                            <textarea cols="30" rows="10" className="ContactContentCommentTextarea" onChange={(e) => setComment(e.target.value)} value={comment} />
                                        }
                                    </div>
                                    <div className="ContactContentButtonDiv">
                                        {isLoading ?
                                            <TailSpin color='#00BFFF' height={30} width={30} />
                                            :
                                            (submitConfirm ?
                                                <>
                                                    <button type="button" className="ContactContentButton leftButton" onClick={(e) => { e.stopPropagation(); setSubmitConfirm(false); }}>Back</button>
                                                    <button type="button" className="ContactContentButton rightButton" onClick={(e) => { e.stopPropagation(); onSubmit() }}>Send</button>
                                                </>
                                                :
                                                <>
                                                    <button type="button" className="ContactContentButton leftButton" onClick={(e) => resetButton(e)}>Reset</button>
                                                    <button type="button" className="ContactContentButton rightButton" onClick={(e) => { e.stopPropagation(); validateAndSubmit() }}>Next</button>
                                                </>
                                            )}
                                    </div>
                                </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
