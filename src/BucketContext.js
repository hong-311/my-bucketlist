import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialBuckets = [
    {
        id: 1,
        text: "웹 프론트엔드 개발자 되기",
        chk: true
    },
    {
        id: 2,
        text: "유럽여행 가기",
        chk: true
    },
    {
        id: 3,
        text: "내 집 마련하기",
        chk: false
    },
    {
        id: 4,
        text: "영국가서 손흥민 축구보기",
        chk: false
    },
    {
        id: 5,
        text: "건강한 생활 습관 기르기",
        chk: false
    }
];

//useReducer로 state관리
//보통 리듀서는 함수로 컴포넌트 밖에 처리
//리듀서는 state 중  업데이트되는 로직만 빼는 것
function BucketReducer(state, action) {
  switch (action.type) {
    case 'CREATE': //생성할 땐
        return state.concat(action.bucket); //기존값에 새로운 객체를 배열로 추가
    case 'TOGGLE': //체크박스 활성/비활성시에는
        return state.map(bucket => //배열 데이터를 다시 변경
          //id로 주어진 키가 클릭한 키와 같으면 chk 속성의 값을 반대로 변경 후 반환
            bucket.id === action.id ? { ...bucket, chk: !bucket.chk } : bucket
        );
    case 'REMOVE': //휴지통 클릭했을 땐
      //id로 주어킨 키가 클릭한 키와 같지 않은 데이터만 다시 필터링해서 반환
        return state.filter(bucket => bucket.id !== action.id);
    default:
      //위의 경우가 아닌 경우 에러 발생시키기
        throw new Error(`사용불가능한 action type : ${action.type}`);
}
}

const BucketStateContext = createContext();
const BucketDispatchContext = createContext();
const BucketNextIdContext = createContext(); //새롭게 전역으로 사용할 nextId값을 처리할 Context를 생성

// 상태값을 관리할 BucketProvider컴포넌트를 생성하고 app.js가 가져갈 수 있도록 export로 모듈화 처리
export function BucketProvider({children}) {
  const [state, dispatch] = useReducer(BucketReducer, initialBuckets); // 초기 배열 데이터를 상태값에 담아줌, state 는 현재 상태값,  dispatch 는 업데이트될 상태값
  const nextId = useRef(6);
  
  return (
    /* 내려받지 않아도 컴포넌트들이 리듀서의 state와 dispatch를 바로 사용할수있게 처리 */
    <BucketStateContext.Provider value={state}>
      <BucketDispatchContext.Provider value={dispatch}>
        <BucketNextIdContext.Provider value={nextId}>
        {children}
        </BucketNextIdContext.Provider>
      </BucketDispatchContext.Provider>
    </BucketStateContext.Provider>
    );
}
export function useBucketState() {
  const context = useContext(BucketStateContext);
  if (!context) {
      throw new Error('BucketProvider를 찾을 수 없습니다.');
  }
  return context;
}

export function useBucketDispatch() {
  const context = useContext(BucketDispatchContext);
  if (!context) {
      throw new Error('BucketProvider를 찾을 수 없습니다.');
  }
  return context;
}

export function useBucketNextId() {
  const context = useContext(BucketNextIdContext);
  if (!context) {
      throw new Error('BucketProvider를 찾을 수 없습니다.');
  }
  return context;
}