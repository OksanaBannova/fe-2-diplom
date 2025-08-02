import React from "react";

/**группа название полки и их количество */
const GroupText = ({ className, name, amount }) => {
   
    return (
      <React.Fragment>
        <div className={className + "_group-text"}>
          <span className={className + "_name"}>{name}</span>
          <span className={className + " text-center"}>{amount}</span>
        </div>
      </React.Fragment>
    );
  };
  export default GroupText;
  