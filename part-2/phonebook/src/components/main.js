import React from "react";
import Title from "./title";

const Main = (props) => {
    const arr = props.arr
    return(
        <div>
            {props.value === "" ? 
            <div>
            <Title title = "Numbers"/>
            {arr.map(p => (
            <p key={p.id}>{p.id}. {p.name}. {p.number}</p>
            ))}
            </div> : 
            <div>
            <Title title = "Filtered Contacts"/>
            <div>{props.function}</div>
            </div>}
            </div>
    )
}

export default Main