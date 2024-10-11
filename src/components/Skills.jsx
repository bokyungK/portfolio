import React from "react";
import { Element } from 'react-scroll';

const SKILL_LIST = [
  {
    name: 'HTML',
    description: 'Semantic Web, 검색 엔진 최적화'
  },
  {
    name: 'CSS',
    description: 'Tailwind, PostCSS, 반응형 웹'
  },
  {
    name: 'Javascript',
    description: 'Vanilla js, jQuery'
  },
  {
    name: 'React',
    description: '함수형 컴포넌트, React-Router, React-Query'
  }
]

export default function Skills() {
  return (
    <Element id='toSkills' className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="inner">
        <ol className="skillList">
          {
            SKILL_LIST.map((item) => {
              const { name, description } = item;
              return <li key={name} className="skill">
                <h2>{name}</h2>
                <div className="description">{description}</div>
              </li>
            })
          }
        </ol>
      </div>
    </Element>
  )
}
