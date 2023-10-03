import React, { createContext, useContext } from 'react';

/*
-  createContext() 는 context를 생성
-  useContext() 는 context를 조회 

문법
1. createContext 함수 처리
const 변수명 = createContext(기본값);

2. 값은 사용하고 싶은 컴포넌트에서 useContext 처리
function 최종자손컴포넌트() {
    const 변수명 = useContext(createContext변수명);
    return ( <div>{ 변수명 }</div> );
}

3. 내보낼 (expert)할 컴포넌트에 Provider컴포넌트 처리
function 내보낼컴포넌트() {
    return ( 
        <createContext변수.Provider value="내려줄값"> //props로 내려줄 값은 provider컴포넌트의 value속성으로 지정
            <렌더링할컴포넌트 />
        </createContext변수.Provider>
    );
}
*/


const Name = createContext('김철수'); // 기본값

function Child() {
    const name = useContext(Name);
    return ( <div><h1>안녕하세요! { name }님</h1></div> );
}
function Parent() {
    return ( <div><Child /></div> );
}
function Grand() {
    return ( <div><Parent /></div> );
}
function Context02(props) {
  return (
    <Name.Provider value="홍길동">
    <Grand />
    </Name.Provider>
  );
}

export default Context02;