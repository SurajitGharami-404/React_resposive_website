import React, { useState } from "react";
import DropdownCustom from "./DropdownCustom";
import Button from "./Button";
import { listItems } from "../Utils/ListItems";

const MainHeader = () => {
  const [current, setCurrent] = useState(0);
  const handleClick = (e) => {
    setCurrent(Number(e.target.id));
    return;
  };
  return (
    <>
      <div className="main-header d-md-flex d-none align-items-center py-4">
        <ul className="main-header__list flex-md-fill d-flex align-items-center ps-0 my-0">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              id={idx}
              className={`px-2 text-center main-header__list-item ${
                current === idx ? "active" : ""
              }`}
              onClick={handleClick}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="main-header__btn-group flex-md-fill d-flex justify-content-end">
          <div className="me-3">
            <DropdownCustom title="Write a Post" menuItems={listItems} />
          </div>
          <Button title="Join Group" icon="fa-solid fa-user-group" />
        </div>
      </div>
      <div className="main-header__mobile container-fluid d-md-none py-3">
        <div className="row">
          <div className="col col-6 d-flex align-items-center">
            <h3 className="main-header__mobile--title my-0">Posts</h3>
          </div>
          <div className="col col-6 d-flex align-items-center justify-content-end">
            <DropdownCustom title="All Posts" filter="Filter:" menuItems={listItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
