import React from 'react';

// 맨위가 최종 자손, 아래로 갈수록 최상위 컴포넌트
// 복잡한 구조이기 때문에 사용하는 것이 context API
function Child({ name }) {
    return ( <div><h1>안녕하세요! { name }님</h1></div> );
}
function Parent({ name }) {
    return ( <div><Child name={name} /></div> );
}
function Grand({ name }) {
    return ( <div><Parent name={name} /></div> );
}
function Context01(props) {
   return ( <div><Grand name="홍길동" /></div> );
}

export default Context01;