import React from "react";
import "../sass/bucketlist.scss";
import BucketItem from "./BucketItem";
import { useBucketState } from "../BucketContext";

//각각의 리스트를 하나로 모아 표시해줄(map()메서드처리할) 컴포넌트
function BucketList() {
  const buckets = useBucketState(); //배열데이터를 buckets에 담는다

  return (
    <div className="bucketlist">
      {buckets.map(bucket => (
      <BucketItem 
        key={bucket.id}
        id={bucket.id}
        text={bucket.text}
        chk={bucket.chk}
      />
      ))}
    </div>
  );
}

export default BucketList;
