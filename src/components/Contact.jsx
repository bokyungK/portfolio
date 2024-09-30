import React from "react";

const PROFILE_ICONS = Array.from({ length: 4 }, (v, i) => i + 1);

export default function Contact() {

    return (
      <section className="contact">
          <div className="profile-container">
            <img className="profile-image" src="./profile_big.webp" alt="김보경 아바타"></img>
            <div className="profile-icons">
              {
                PROFILE_ICONS.map((cnt) => <img key={cnt} src={`/contact/keyword_border_${cnt}.png`} alt="키워드" />)
              }
            </div>
          </div>
          <p className="profile-intro">
            안녕하세요
            <span className="job">Frontend Developer</span>
            김보경입니다!
          </p>
          {/* <ul className="infoList">
            <li className="infoItems email">
              👉 Email : freebob2b@gmail.com
            </li>
            <li className="infoItems git">
              👉 Github : <a href="https://github.com/bokyungK">https://github.com/bokyungK</a>
            </li>
          </ul> */}
      </section>
    )

}
