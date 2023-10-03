import React from "react";
import "./App.css";
import BucketBox from "./components/BucketBox";
import BucketHeader from "./components/BucketHeader";
import BucketList from "./components/BucketList";
import BucketCreate from "./components/BucketCreate";
//[ BucketProvider ] 컴포넌트를 불러왔는데, 중괄호를 쓴 이유는 export 모듈화로 바로 내보냈기 때문
// default로 내보내면 바로 호출하면 되지만  함수나 변수를 특정해서 내보내면 중괄호를 통해서 불러와야 함
import { BucketProvider } from "./BucketContext";

function App() {
  return (
    <BucketProvider>
      <BucketBox>
        <BucketHeader />
        <BucketList />
        <BucketCreate />
      </BucketBox>
    </BucketProvider>
  );
}

export default App;