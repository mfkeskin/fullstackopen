import React from "react";

const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null;
  } else {
    if (messageType === "notification") {
      return <div className="notification">{message}</div>;
    } else {
      return <div className="warning">{message}</div>;
    }
  }
};

export default Notification;
