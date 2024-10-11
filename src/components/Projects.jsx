import React from "react";
import { Element } from 'react-scroll';

const PROJECTS = [
  {
    title: 'To Do List',
    description: '투 두 리스트를 기록하고 다크/라이트 모드를 변경할 수 있는 미니 프로젝트입니다.',
    imageName: 'toDoList',
    tags: ['React', 'PostCSS'],
    infoUrl: 'https://www.notion.so/gombobbang/To-Do-List-11cd4a027b2e80f29c67cd703bb60783',
    siteUrl: 'https://bobo-to-do.netlify.app/'
  },
  // {
  //   title: 'Youtube Clone',
  //   description: '공식 API를 활용하여 유튜브와 똑같은 사이트를 제작한 프로젝트입니다.',
  //   imageName: 'gomtube',
  //   tags: ['React', 'React-Router-Dom', 'Tailwind'],
  //   infoUrl: 'https://github.com/bokyungK/youtube-clone',
  //   siteUrl: 'https://gomtube.netlify.app/',
  // },
  {
    title: 'Game Shop',
    description: '게임 팩 판매 사이트를 제작했습니다. 관리자 계정으로 새로운 제품 등록, 등록된 제품 가져오기, 로그인/로그아웃, 유저별로 장바구니를 등록하고 확인 수 있습니다.',
    imageName: 'gameShop',
    tags: ['React', 'React-router', 'React-query', 'Firebase', 'Cloudinary', 'Tailwind'],
    infoUrl: 'https://www.notion.so/gombobbang/Game-Shop-11cd4a027b2e80e38661dbba7c030e1c',
    siteUrl: 'https://bobo-gamer-shop.netlify.app/',
  },
  {
    title: '산책일기',
    description: '반려견과 매일 산책했던 경험을 사진과 일기로 기록할 수 있는 서비스입니다. 출석 도장, 로그인/아웃, 회원가입/탈퇴, 즐겨찾기, 정렬 등 기능을 사용할 수 있습니다.',
    imageName: 'diary',
    tags: ['React', 'React-router', 'React-query', 'Firebase', 'Cloudinary', 'PostCSS'],
    infoUrl: 'https://www.notion.so/gombobbang/11cd4a027b2e8080b7eedc14219a37ac',
    siteUrl: 'https://new-walking-diary.netlify.app/',
  }
];

export default function Projects() {
  return (
    <Element id="toProject" className="projects">
      <h2 className="section-title">Projects</h2>
      <ol className="project-container">
        {
          PROJECTS.map((item) => {
            const { title, description, imageName, tags, infoUrl, siteUrl } = item;

            return (
              <li className="project-item" key={imageName}>
                <div className="project-info">
                  <h2>{`<${title}>`}</h2>
                  <div className="project-content">
                    <div className="image-container">
                      <img className={`project-image ${imageName}`} src={`/project/${imageName}.jpg`} alt={`${title} 미리보기`}></img>
                    </div>
                    <div>
                      <p>{description}</p>
                      <div className="languages">
                        🧰 use : {tags.join(', ')}
                      </div>
                      <div className="link-container">
                        <a className="url-items" href={infoUrl}>상세 정보</a>
                        <a className="url-items" href={siteUrl}>사이트</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ol>
    </Element>
  )
}
