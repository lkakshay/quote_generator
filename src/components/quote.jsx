import { useState } from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";

export const Quote = ({ data }) => {
  const [status, setStatus] = useState(false);
  const bookMark = () => {
    setStatus(true);
  };
  const unBookMark = () => {
    setStatus(false);
  };

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
