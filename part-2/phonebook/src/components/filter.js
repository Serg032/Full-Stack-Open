import React from "react";

const Filter = (props) => {

    return (
        <div>
            filter shown with
            <input
            type="text"
            placeholder="...filter by"
            value={props.value}
            onChange={props.eventHandler}
            />
            <button onClick={props.function}>clear</button>
      </div>
        
    )
}

export default Filter