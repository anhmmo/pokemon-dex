import React from "react";
import "./Pagination.css";

function Pagination({ loadP }) {
  Pagination.defaultProps = {
    defaultBG: "pages",
    activeBG: "active",
  };

  const { defaultBG, activeBG } = Pagination.defaultProps;

  return (
    <div className="pagination">
      <ul className="list-pages">
        <li className="arrow-left active">&#129092;</li>
        <li onClick={() => loadP(0)} className={activeBG}>
          1
        </li>
        <li onClick={() => loadP(1)} className={defaultBG}>
          2
        </li>
        <li onClick={() => loadP(2)} className={defaultBG}>
          3
        </li>
        <li onClick={() => loadP(3)} className={defaultBG}>
          4
        </li>
        <li onClick={() => loadP(4)} className={defaultBG}>
          5
        </li>
        <li>...</li>
        <li onClick={() => loadP(39)} className={defaultBG}>
          41
        </li>
        <li className="arrow-right active">&#129094;</li>
      </ul>
    </div>
  );
}

export default Pagination;
