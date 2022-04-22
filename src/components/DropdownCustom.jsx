import React,{useState} from "react";
import "../Styles/Dropdown.css";

const DropdownCustom = ({ title,filter, menuItems }) => {
  const [selected,setSelected] = useState(title)
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle dropdown__btn"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       {typeof filter !== "undefined"?`${filter} ${selected}`:selected}
      </button>
      {typeof menuItems !== "undefined" && (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <button className="dropdown-item" type="button" onClick={()=>setSelected(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownCustom;
