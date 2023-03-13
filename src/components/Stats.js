import React from "react";

function Stats() {
    return (
        <div className="Stats">
            <div className="inner">
                <ol className="skillList skillName">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>AWS</li>
                </ol>
                <ol className="skillList description">
                    <li>
                        <span>Semantic Web 구현</span>
                        <span>meta tag를 이용한 검색 엔진 최적화</span>
                    </li>
                    <li><span>styled component</span></li>
                    <li><span>Vanilla js</span></li>
                    <li>
                        <span>함수형 컴포넌트 경험</span>
                        <span>Hooks(useState, useEffect, useCallback, Router ..) 사용 경험</span>
                        <span>recoil(상태 관리 라이브러리) 사용 경험</span>
                    </li>
                    <li><span>Express</span></li>
                    <li>
                        <span>EC2 서버 배포</span>
                        <span>RDS(MYSQL) 서버와 연결</span>
                        <span>RDS(MYSQL) 서버와 연결</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Stats;