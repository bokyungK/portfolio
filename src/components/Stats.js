import React from "react";

function Stats() {
    return (
        <div className="Stats">
            <div className="inner">
                <ol className="skillList">
                    <li className="skill">
                        <h2>HTML</h2>
                        <div className="description">
                            <span>Semantic tag</span>
                            <span>meta tag를 이용한 검색 엔진 최적화</span>
                        </div>
                    </li>
                    <li className="skill">
                        <h2>CSS</h2>
                        <div className="description">
                            <span>styled component</span>
                            <span>반응형 웹</span>
                        </div>
                    </li>
                    <li className="skill">
                        <h2>Javascript</h2>
                        <div className="description">
                            <span>Vanilla js</span>
                            <span>fetch/axios 비동기 통신 구현</span>
                        </div>
                    </li>
                    <li className="skill">
                        <h2>React</h2>
                        <div className="description">
                            <span>함수형 컴포넌트</span>
                            <span>Hooks(useState, useEffect, useCallback, Router ..) 사용 경험</span>
                            <span>recoil(상태 관리 라이브러리) 사용 경험</span>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Stats;