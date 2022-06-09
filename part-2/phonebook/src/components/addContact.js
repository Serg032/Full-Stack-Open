import React from "react";

const AddContact = (props) => {
    return(
        <form onSubmit={props.eventSubmit}>
        <div>
          <div>
            name:
            <input
            value={props.valueName} 
            type="text" 
            placeholder='...name'
            onChange={props.eventName}
            />
          </div>
          <div>
            number
            <input
            value={props.valueNumber}
            type="text"
            placeholder='...phone number'
            onChange={props.eventNumber}
            />
          </div>
         
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddContact