import React from "react";

const Finder = (props) => {
    return(
        <div>
            <p>find countries</p>
            <input
            type="text"
            placeholder="...country"
            value={props.value}
            onChange={props.function}
            />
        </div>
    )
}

export default Finder