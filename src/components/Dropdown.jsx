import React from "react";
import "../Styles/Dropdown.css";

const Dropdown = ({ title, url, urlText,click }) => {
  return (
    <div className="d-flex align-items-center dropdown-custom">
      <p className="mb-0 dropdown__title">{title}</p>
      {urlText && <a href={url} className="dropdown__url" onClick={click}> {urlText}</a>}
      <span className="ms-2 dropdown__icon">
        <i className="fa-solid fa-caret-down"></i>
      </span>
    </div>
    
  );
};

export default Dropdown;
