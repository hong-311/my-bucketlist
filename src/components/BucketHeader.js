import React, { useState } from "react";
import "../sass/bucketheader.scss";
import { useBucketState } from "../BucketContext";

//상단에서 타이틀과 날짜, 남은 할일을 표시해주는 컴포넌트
function BucketHeader() {
  const today = new Date(); //오늘의 날짜와 시간 담는 변수
  const week = ["일", "월", "화", "수", "목", "금", "토"]; //요일문자로 담는 변수

  //각각 년, 월, 일, 요일을 담는 객체
  const dateString = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: today.getDay()
  };

  //비구조화할당 처리
  const { year, month, date, day } = dateString;

  //custom hooks 불러오기
  const buckets = useBucketState();

  //체크되지 않은 것만 재할당
  const falseChks = buckets.filter(bucket => !bucket.chk);

  const [userName, setUserName] = useState(""); // 사용자 이름을 저장할 상태

  // 사용자 이름 입력 받기
  const InputUserName = () => {
    const userInput = prompt("사용자 이름을 입력하세요:");
    if (userInput) {
      setUserName(userInput);
    }
  };

 return (
    <div className="bucketheader">
      <h1>{userName ? `${userName}님의` : "My"} Bucket List</h1>
      <h2>
        현재 : {year}년 {month}월 {date}일 {week[day]}요일
      </h2>
      <p>{userName ? `${userName}님의` : ""} 할 일 {falseChks.length}개 남음</p>
      <button onClick={InputUserName}>사용자 이름 설정</button>
    </div>
  );
}

export default BucketHeader;
