import { useSelector } from "react-redux"
import { Quote } from "../components/quote";

export const Bookmark=()=>{

    const data=useSelector((data)=>data.bookmark)
    return(
        <div className="bookmark">
            {data.length===0?<div>No Bookmarked Items</div>:<></>}
          {  data?.map((e)=><Quote book={true} key={e._id} data={e}/>)}
        </div>
    )

}