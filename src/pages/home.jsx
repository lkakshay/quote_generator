import { useEffect, useState } from "react";
import { Quote } from "../components/quote";
import axios from "axios";



export const Home = () => {

    const [data,setData]=useState({})
    const [tags,setTags]=useState([])
    const [searchTag,setSearchTag]=useState("")
    const getQuote=()=>{

console.log('searchTag',searchTag);
        axios.get(`https://api.quotable.io/quotes/random?tags=${searchTag}&limit=1`)
        .then((res)=>{
            // console.log('res',res);
            setData(res.data[0])
        })
        .catch((err)=>console.log(err))
    }
    const getTag=()=>{


        axios.get('https://api.quotable.io/tags')
        .then((res)=>{
            console.log('res',res);
            setTags(res.data)
        })
        .catch((err)=>console.log(err))
    }
    

    useEffect(()=>{
        getQuote()

    },[])
    useEffect(()=>{
        getTag()

    },[])
  return (
    <div className="home">
      <Quote data={data} />
      <div className="option">
        <select name="select a tag"
        
        onChange={(e)=>{setSearchTag(e.target.value)}}>
              <option key='1' value="none" selected disabled hidden>Select a Tag</option>
        {tags?.map((e)=><option value={e.name} key={e.id} >{e.name}</option>)}
        </select>
      </div>
      <button onClick={getQuote} >Next Quote</button>
    </div>
  );
};
