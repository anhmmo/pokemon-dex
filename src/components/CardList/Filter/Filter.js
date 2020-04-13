import React from "react";
import "./Filter.css";

function Filter({ onClickButton }) {
  return (
    <div className="filter-box">
      <form id="app-cover">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button">
          <div id="selected-value">
            <span>Sort Pokemon In List</span>
          </div>
          <div id="chevrons">
            <i className="fas fa-chevron-up" />
            <i className="fas fa-chevron-down" />
          </div>
        </div>
        <div id="options">
          <div onClick={onClickButton} className="option">
            <input
              className="s-c top"
              type="radio"
              name="platform"
              defaultValue="id"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              defaultValue="id"
            />
            <i className="fas fa-sort-numeric-down"></i>
            <span className="label">Sort By Id (1 - 807)</span>
            <span className="opt-val">Sort By Id (1 - 807)</span>
          </div>
          <div onClick={onClickButton} className="option">
            <input
              className="s-c top"
              type="radio"
              name="platform"
              defaultValue="id2"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              defaultValue="id2"
            />
            <i className="fas fa-sort-numeric-down-alt"></i>
            <span className="label">Sort By Id (807 - 1)</span>
            <span className="opt-val">Sort By Id (807 - 1)</span>
          </div>

          <div onClick={onClickButton} className="option">
            <input
              className="s-c top"
              type="radio"
              name="platform"
              defaultValue="name"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              defaultValue="name"
            />
            <i className="fas fa-sort-alpha-down"></i>
            <span className="label">Sort By Name (A - Z)</span>
            <span className="opt-val">Sort By Name (A - Z)</span>
          </div>
          <div onClick={onClickButton} className="option">
            <input
              className="s-c top"
              type="radio"
              name="platform"
              defaultValue="name2"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              defaultValue="name2"
            />
            <i className="fas fa-sort-alpha-down-alt"></i>
            <span className="label">Sort By Name (Z - A)</span>
            <span className="opt-val">Sort By Name (Z - A)</span>
          </div>
          <div onClick={onClickButton} className="option">
            <input
              className="s-c top"
              type="radio"
              name="platform"
              defaultValue="type"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              defaultValue="type"
            />
            <i className="fas fa-paw"></i>
            <span className="label">Sort By Type (a - z)</span>
            <span className="opt-val">Sort By Type (a - z)</span>
          </div>
          <div onClick={onClickButton} className="option">
            <input
              className="s-c top"
              type="radio"
              name="platform"
              defaultValue="type2"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              defaultValue="type2"
            />
            <i className="fab fa-typo3"></i>
            <span className="label">Sort By Type (z - a)</span>
            <span className="opt-val">Sort By Type (z - a)</span>
          </div>
          <div id="option-bg" />
        </div>
      </form>
    </div>
  );
}

export default Filter;
