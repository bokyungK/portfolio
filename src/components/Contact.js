import React from "react";

function Contact() {

    return (
        <div className="Contact">
            <div className="inner">
                <img className="profile" src="profile.png" alt="캐릭터 이미지"></img>
                <div className="info">
                    <div className="infoItems name">안녕하세요, <span>김보경</span>입니다!</div>
                    <div className="infoItems job">Frontend Developer</div>
                    <div className="infoItems email">E-mail : freebob2b@gmail.com</div>
                    <div className="infoItems git">Github : <a href="https://github.com/bokyungK">https://github.com/bokyungK</a></div>
                </div>
            </div>
        </div>
    )

}

export default Contact;