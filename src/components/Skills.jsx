import React from "react";
import { Element } from 'react-scroll';

export default function Skills() {
  return (
    <Element id='toSkills' className="skills">
      <h2 className="sectionTitle">Skills</h2>
      <div className="inner">
        <ol className="skillList">
          <li className="skill">
            <h2>HTML</h2>
            <div className="description">
              Semantic Web, 검색 엔진 최적화
            </div>
          </li>
          <li className="skill">
            <h2>CSS</h2>
            <div className="description">
              Tailwind, PostCSS, 반응형 웹
            </div>
          </li>
          <li className="skill">
            <h2>Javascript</h2>
            <div className="description">
              Vanilla js, jQuery
            </div>
          </li>
          <li className="skill">
            <h2>React</h2>
            <div className="description">
              함수형 컴포넌트, React-Router-Dom, React-Query
            </div>
          </li>
        </ol>
      </div>
    </Element>
  )
}
