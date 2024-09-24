import React from "react";

export default function Contact() {

    return (
      <section className="Contact">
          <img className="profileImage" src="./profile_big.webp" alt="김보경 아바타"></img>
          <p className="infoItems profileIntro">
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
