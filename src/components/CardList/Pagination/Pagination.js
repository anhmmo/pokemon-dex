import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const { loadP, page, active, activeNum } = props;
  return (
    <div className="pagination">
      <ul className="list-pages">
        <li className="arrow-left active">&#129092;</li>
        <li onClick={loadP(0)} className={activeNum === 0 ? active : page}>
          1
        </li>
        <li onClick={loadP(1)} className={activeNum === 1 ? active : page}>
          2
        </li>
        <li onClick={loadP(2)} className={activeNum === 2 ? active : page}>
          3
        </li>
        <li onClick={loadP(3)} className={activeNum === 3 ? active : page}>
          4
        </li>
        <li onClick={loadP(4)} className={activeNum === 4 ? active : page}>
          5
        </li>
        <li>...</li>
        <li onClick={loadP(39)} className={activeNum === 39 ? active : page}>
          41
        </li>
        <li className="arrow-right active">&#129094;</li>
      </ul>
    </div>
  );
}

export default Pagination;
