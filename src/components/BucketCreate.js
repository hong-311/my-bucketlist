import React, {useState} from "react";
import "../sass/bucketcreate.scss";
import { MdAdd } from "react-icons/md";
import { useBucketDispatch, useBucketNextId } from "../BucketContext";

//하단에 리스트를 추가해줄 폼영역과 버튼을 구현해줄 컴포넌트
function BucketCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  // 배열 데이터 변경을 위한 context를 조회
  const dispatch = useBucketDispatch();
  const nextId = useBucketNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value); // 입력되는 값을 입력상자 데이터에 들어오게 처리

  const onSubmit = e => {
    e.preventDefault(); 

    //dispatch함수를 통해 CREATE case 불러오고 bucket이라는 객체를 만들어 새롭게 생성될 값을 담아줌
    dispatch({    
        type: 'CREATE',
        bucket: {
            id: nextId.current,
            text: value,
            chk: false
        }
    });

    setValue('');   // 입력상자의 값을 다시 비우고
    setOpen(false); // 폼은 닫히도록 지정

    nextId.current += 1;  // 새롭게 또 배열 데이터를 추가할 수 있으니,  nextId 의 값을 1을 추가
};

  return (
    <>
      <div className={open ? 'createform active' : 'createform'}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="추가할 버킷리스트를 입력 후, Enter를 누르세요."
            onChange={onChange}
            value={value}
          />
        </form>
      </div>
      <div className="circlebox" onClick={onToggle}>
        <MdAdd />
      </div>
    </>
  );
}

export default BucketCreate;
