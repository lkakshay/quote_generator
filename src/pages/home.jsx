import { useEffect, useState } from "react";
import { Quote } from "../components/quote";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../redux/action";

export const Home = () => {
  const [tags, setTags] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const dispatch = useDispatch();
  const { randomQuotes, isLoading } = useSelector((data) => data);

  const getTag = () => {
    axios
      .get("https://api.quotable.io/tags")
      .then((res) => {
        console.log("res", res);
        setTags(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getQuote(searchTag));
  }, []);
  useEffect(() => {
    getTag();
  }, []);
  return (
    <div className="home">
      {isLoading ? <div>loading....</div> : <Quote data={randomQuotes} />}
      <div className="option">
        <select
        className="option-tag"
          onChange={(e) => {
            setSearchTag(e.target.value);
          }}
        >
          <option value="">Select a Tag</option>
          {tags?.map((e) => (
            <option value={e.name} key={e._id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <button className="quote-button" onClick={() => dispatch(getQuote(searchTag))}>Next Quote</button>
    </div>
  );
};
