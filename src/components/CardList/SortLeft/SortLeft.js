import React from "react";
import "./SortLeft.css";

function SortLeft({ onClickButton, checkOpenMenu, openMenu }) {
  console.log(openMenu);
  return (
    <div className="sorted-box">
      <div onClick={checkOpenMenu} className="label-box">
        Show Pokemon Number{" "}
        {openMenu ? (
          <i className="fas fa-sort"></i>
        ) : (
          <i className="fas fa-sort inactive"></i>
        )}
      </div>
      {openMenu ? (
        <div className="show-box">
          <div onClick={onClickButton} id="id" className="main-box">
            <i className="fas fa-sort-numeric-down"></i> Show 20 Pokemon
          </div>
          <div onClick={onClickButton} id="id2" className="main-box">
            <i className="fas fa-sort-numeric-down-alt"></i>Show 50 Pokemon
          </div>
          <div onClick={onClickButton} id="name" className="main-box">
            <i className="fas fa-sort-alpha-down"></i>Show 100 Pokemon
          </div>
          <div onClick={onClickButton} id="name2" className="main-box">
            <i className="fas fa-sort-alpha-down-alt"></i>Show 150 Pokemon
          </div>
          <div onClick={onClickButton} id="type" className="main-box">
            <i className="fas fa-paw"></i>Show 200 Pokemon
          </div>
          <div onClick={onClickButton} id="type2" className="main-box">
            <i className="fab fa-typo3"></i>Show 300 Pokemon
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SortLeft;
