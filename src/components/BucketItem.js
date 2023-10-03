import React from "react";
import "../sass/bucketitem.scss";
import { MdDone, MdDelete } from "react-icons/md";
import { useBucketDispatch } from "../BucketContext";

//리스트 한개를 구현해줄 컴포넌트(체크박스 + 텍스트 + 휴지통아이콘)
function BucketItem({id, text, chk}) {
  const dispatch = useBucketDispatch();
  const onToggle = () => dispatch({type: 'TOGGLE', id});
  const onRemove = () => dispatch({type: 'REMOVE', id});

  return (
    <div className="bucketitem">
        <div
            className={ chk ? 'checkcircle active' : 'checkcircle' }
            onClick={onToggle}
        >
            <MdDone />
        </div>
        <p>{ text }</p>
        <div 
            className="remove"
            onClick={ onRemove }
        >
            <MdDelete />
        </div>
    </div>
  );
}

export default BucketItem;
