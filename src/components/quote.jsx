import { useEffect, useState } from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { bookMarkItem, unBookMarkItem } from "../redux/action";

export const Quote = ({ data ,book}) => {
  const [status, setStatus] = useState(false);
  const dispatch=useDispatch()
  const bookMark = () => {
    setStatus(true);
    dispatch( bookMarkItem(data))
  };
  const unBookMark = () => {
    setStatus(false);
    dispatch(unBookMarkItem(data))
  };

  useEffect(()=>{
  if(book){
    setStatus(true)
  }
  },[book])

  return (
    <div className="quote">
      <div className="quote-content">{data?.content}</div>
      <div className="quote-others">
        <div className="quote-content">- {data?.author}</div>
        <div className="quote-bookark">
          {status ? (
            <BsFillBookmarkFill onClick={() => unBookMark()} />
          ) : (
            <BsBookmarkPlus onClick={() => bookMark()} />
          )}
        </div>
      </div>
    </div>
  );
};
