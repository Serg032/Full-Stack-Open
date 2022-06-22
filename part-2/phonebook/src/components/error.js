import React from "react";
import "./../styles/error.css";

const Notification = (props) => {
  if (props.message === null) {
    return null;
  }
  if (props.message === false) {
    return <div className="added">Person created</div>;
  }
  return <div className="error">{props.message}</div>;
};

export default Notification;
