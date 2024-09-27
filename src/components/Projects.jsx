import React from "react";
import { Element } from 'react-scroll';

const PROJECTS = [
  {
    title: 'To Do List',
    description: '간단한 투 두 리스트 작성 및 다크/라이트 모드 기능이 있는 프로젝트입니다.',
    imageName: 'toDoList',
    tags: ['React', 'PostCSS'],
    infoUrl: 'https://github.com/bokyungK/making-to-do-list',
    siteUrl: 'https://bobo-to-do.netlify.app/'
  },
  {
    title: 'Youtube Clone',
    description: '공식 API를 활용하여 유튜브와 똑같은 사이트를 제작한 프로젝트입니다.',
    imageName: 'gomtube',
    tags: ['React', 'React-Router-Dom', 'Tailwind'],
    infoUrl: 'https://github.com/bokyungK/youtube-clone',
    siteUrl: 'https://gomtube.netlify.app/',
  },
  {
    title: 'Game Shop',
    description: '게임 팩 판매 사이트를 제작했습니다. 관리자 계정으로 새로운 제품 등록, 등록된 제품 가져오기, 로그인/로그아웃, 유저별로 장바구니를 등록하고 확인 수 있습니다.',
    imageName: 'gameShop',
    tags: ['React', 'React-router-dom', 'React-query', 'Firebase', 'Cloudinary', 'Tailwind'],
    infoUrl: 'https://github.com/bokyungK/shoppy',
    siteUrl: 'https://bobo-gamer-shop.netlify.app/',
  },
  {
    title: '산책일기',
    description: '반려견과 매일 산책했던 경험을 사진과 일기로 기록할 수 있는 서비스입니다. 출석 도장, 로그인/아웃, 회원가입/탈퇴, 즐겨찾기, 정렬 등 기능을 사용할 수 있습니다.',
    imageName: 'diary',
    tags: ['React', 'React-router-dom', 'React-query', 'Firebase', 'Cloudinary', 'PostCSS'],
    infoUrl: 'https://github.com/bokyungK/walking-diary',
    siteUrl: 'https://new-walking-diary.netlify.app/',
  }
];

export default function Projects() {  
  // useEffect(() => {
  //   const projectImages = document.querySelectorAll('.projectImage');
  //   let firstBrowserMove = true;

  //   projectImages[0].classList.add('aniRotateStop');
  //   if (window.innerWidth > 780) projectImages[0].classList.add('aniRotateRight');
  //   else projectImages[0].classList.add('aniRotateLeft');

  //   window.addEventListener('resize', function() {
  //       const curBrowserWidth = window.innerWidth;

  //       if (curBrowserWidth > 780) {
  //           if (projectImages[0].classList.contains('aniRotateRight')) {
  //               return;
  //           }
  //           projectImages.forEach((element) => element.classList.add('aniRotateRight'));
  //           projectImages.forEach((element) => element.classList.remove('aniRotateLeft'));
  //       } else {
  //           if (projectImages[0].classList.contains('aniRotateLeft')) {
  //               return;
  //           }
  //           projectImages.forEach((element) => element.classList.add('aniRotateLeft'));
  //           projectImages.forEach((element) => element.classList.remove('aniRotateRight'));
  //       }

  //       if (firstBrowserMove) {
  //           firstBrowserMove = false;
  //           projectImages[0].classList.remove('aniRotateStop');
  //       }
  //     });
  // }, []);

  return (
    <Element id="toProject" className="Projects">
      <h2 className="sectionTitle">Projects</h2>
      <ol className="projectContainer">
        {
          PROJECTS.map((item) => {
            const { title, description, imageName, tags, infoUrl, siteUrl } = item;

            return (
              <li className="projectItem" key={imageName}>
                <div className="projectInfo">
                  <h2>{`<${title}>`}</h2>
                  <div className="project-content">
                    <div className="imageContainer">
                      <img className={`projectImage ${imageName}`} src={`/project/${imageName}.jpg`} alt={`${title} 미리보기`}></img>
                    </div>
                    <div>
                      <p>{description}</p>
                      <div className="languages">
                        🧰 use : {tags.join(', ')}
                      </div>
                      <div className="linkWrap">
                        <a className="urlItems" href={infoUrl}>깃헙</a>
                        <a className="urlItems" href={siteUrl}>사이트</a>
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
