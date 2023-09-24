import React,{useState} from "react";
import Child from "./Child";

const Parent = () =>{
    const[showModel,setShowModel] = useState(false);

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child showModal={showModel} setShowModal={setShowModel} />
        </div>
    )
}

export default Parent;