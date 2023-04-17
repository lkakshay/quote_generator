import { useSelector } from "react-redux"
import { Quote } from "../components/quote";

export const Bookmark=()=>{

    const data=useSelector((data)=>data.bookmark)
    console.log('data',data);
    return(
        <div className="bookmark">
          {  data?.map((e)=><Quote book={true} key={e._id} data={e}/>)}
        </div>
    )

}