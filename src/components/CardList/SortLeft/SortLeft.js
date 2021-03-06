import React from "react";
import "./SortLeft.css";

function SortLeft({ onClickButton, checkOpenMenu, openMenu }) {
  //console.log(openMenu);
  return (
    <div className="sorted-box">
      <div onClick={checkOpenMenu} className="label-box">
        Sort Pokemon In List
        {openMenu ? (
          <i className="fas fa-sort"></i>
        ) : (
          <i className="fas fa-sort inactive"></i>
        )}
      </div>
      {openMenu ? (
        <div className="show-box">
          <div onClick={onClickButton} name="1" className="main-box">
            <i className="fas fa-sort-numeric-down"></i> Sort By Id (1 - 807)
          </div>
          <div onClick={onClickButton} name="2" className="main-box">
            <i className="fas fa-sort-numeric-down-alt"></i>Sort By Id (807 - 1)
          </div>
          <div onClick={onClickButton} name="3" className="main-box">
            <i className="fas fa-sort-alpha-down"></i>Sort By Name (A - Z)
          </div>
          <div onClick={onClickButton} name="4" className="main-box">
            <i className="fas fa-sort-alpha-down-alt"></i>Sort By Name (Z - A)
          </div>
          <div onClick={onClickButton} name="5" className="main-box">
            <i className="fas fa-paw"></i>Sort By Type (a - z)
          </div>
          <div onClick={onClickButton} name="6" className="main-box">
            <i className="fab fa-typo3"></i>Sort By Type (z - a)
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SortLeft;
