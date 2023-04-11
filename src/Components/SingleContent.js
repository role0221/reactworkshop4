import { useState } from "react"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";



const SingleContent =({title,description})=>{
    const [showcontent,setshowcontent]= useState(false)
    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setshowcontent(!showcontent)}>
                    {showcontent ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showcontent&&<p>{description}</p>}
        </article>
    )
}

export default SingleContent