import React from "react";
import "../sass/bucketbox.scss";

//모든 요소를 감싸고 흰색 영역을 줄 컴포넌트
function BucketBox({ children }) {
  return <div className="bucketbox"> {children} </div>;
}

export default BucketBox;
