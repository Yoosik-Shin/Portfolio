import React from "react";

const DropdownItem = (props) => {
  return (
    <li>
      <img src={props.img} alt="" />
      <a href={props.to} onClick={props.onClick}>{props.text}</a>
    </li>
  );
};

export default DropdownItem;
