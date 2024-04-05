import React from "react";

function Stats() {
    return (
        <div className="Stats">
            <div className="inner">
                <ol className="skillList">
                    <li className="skill">
                        <h2>HTML</h2>
                        <div className="description">
                            <div>Semantic Web</div>
                            <div>meta tag를 이용한 검색 엔진 최적화</div>
                        </div>
                    </li>
                    <li className="skill">
                        <h2>CSS</h2>
                        <div className="description">
                            <div>styled component</div>
                            <div>반응형 웹</div>
                        </div>
                    </li>
                    <li className="skill">
                        <h2>Javascript</h2>
                        <div className="description">
                            <div>Vanilla js</div>
                            <div>fetch/axios 비동기 통신 구현</div>
                        </div>
                    </li>
                    <li className="skill">
                        <h2>React</h2>
                        <div className="description">
                            <div>함수형 컴포넌트</div>
                            <div>Hooks(useState, useEffect, useCallback, Router ..) 사용 경험</div>
                            <div>recoil(상태 관리 라이브러리) 사용 경험</div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Stats;