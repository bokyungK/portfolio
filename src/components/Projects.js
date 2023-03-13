import React from "react";

function Projects() {
    return (
        <div className="Projects">
                <ol className="projectContainer">
                    <li className="projectItem">
                        <img className="projectImage" src="ptdg_preview.png" alt="프로젝트 미리보기"></img>
                        <div className="projectInfo">
                            <h2>Pig Dice Game!</h2>
                            <p>
                                부트캠프 팀원들과 함께 제작한 주사위 게임입니다.
                                pull request를 이용해 협업했습니다.
                            </p>
                            <div className="languages">
                                <span className="language">HTML</span>
                                <span className="language">CSS</span>
                                <span className="language">Vanilla javascript</span>    
                            </div>
                            <div className="projectType">팀 프로젝트</div>
                            <a className="urlItems" href="https://www.notion.so/gombobbang/Pig-dice-game-2b5374d933de40a7aa6776b5ead18812">프로젝트 소개로 이동</a>
                        </div>
                    </li>
                    <li className="projectItem">
                        <img className="projectImage" src="wallet_preview.jpg" alt="프로젝트 미리보기"></img>
                        <div className="projectInfo">
                            <h2>내 지갑 관리</h2>
                            <p>Figma로 제작된 디자인 시안을 시맨틱 마크업을 적용해 퍼블리싱 작업한 프로젝트입니다.</p>
                            <div className="languages">
                                <span className="language">HTML</span>
                                <span className="language">CSS</span>
                                <span className="language">Vanilla javascript</span>    
                            </div>
                            <div className="projectType">개인 프로젝트</div>
                            <a className="urlItems" href="https://www.notion.so/gombobbang/b61aacd032524c7ba7dbd88f8343cea5">프로젝트 소개로 이동</a>
                        </div>
                    </li>
                    <li className="projectItem">
                        <img className="projectImage" src="lecture_preview.png" alt="프로젝트 미리보기"></img>
                        <div className="projectInfo">
                            <h2>찌니쌤 일본어</h2>
                            <p>일본어 강의 페이지의 화면을 vanilla JS, 반응형으로 제작한 
                            프로젝트입니다. 화면과 요소의 움직임을 라이브러리 없이
                            직접 이해하고 구현하였습니다.
                            </p>
                            <div className="languages">
                                <span className="language">HTML</span>
                                <span className="language">CSS</span>
                                <span className="language">Vanilla javascript</span>
                                <span className="language">github-pages</span>
                                <span className="language">AWS API Gateway</span>
                                <span className="language">AWS Lambda</span>
                            </div>
                            <div className="projectType">개인 프로젝트</div>
                            <div className="urlContainer">
                                <a className="urlItems" href="https://www.notion.so/gombobbang/ad1be22c7f134ce7a16a194519a2a29e">프로젝트 소개로 이동</a>
                                <a className="urlItems" href="https://bokyungk.github.io/japanese-language-course-site/">프로젝트 페이지로 이동</a>
                            </div>
                        </div>
                    </li>
                    <li className="projectItem">
                        <img className="projectImage" src="walkingDiary_preview.jpg" alt="프로젝트 미리보기"></img>
                        <div className="projectInfo">
                            <h2>산책일기</h2>
                            <p>
                                강아지와 매일 산책하는 추억을 기록하는 웹 서비스입니다.
                                풀스택을 담당하여 일기 CRUD, 로그인/아웃, 회원가입/탈퇴,
                                즐겨찾기, 정렬 등 다양한 기능이 있습니다.
                            </p>
                            <div className="languages">
                                <span className="language">React</span>
                                <span className="language">Express</span>
                                <span className="language">Netlify</span>
                                <span className="language">AWS EC2</span>
                                <span className="language">AWS RDS</span>
                                <span className="language">styled-component</span>
                                <span className="language">recoil</span>
                            </div>
                            <div className="projectType">개인 프로젝트</div>
                            <div className="urlContainer">
                                <a className="urlItems" href="https://www.notion.so/gombobbang/ee5a768d7569407dba2768e4d3042cba">프로젝트 소개로 이동</a>
                                <a className="urlItems" href="https://app.walking-diary-server.site/">프로젝트 페이지 이동</a>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
    )
}

export default Projects;