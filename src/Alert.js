import React from "react";

const Alert = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="alert alert-danger" role="alert">
        This is a primary alert-check it out!
      </div>
    );
  }
};

export default Alert;
