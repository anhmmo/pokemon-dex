import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const { loadP, page, active, activeNum, nextPage, pokemon } = props;
  console.log(pokemon.length);
  return (
    <div className="pagination">
      {pokemon.length < 800 ? (
        <ul className="list-pages">
          <li onClick={loadP(activeNum - 1)} className="arrow-left active">
            &#129092;
          </li>

          {nextPage.map((item, index) => (
            <li
              key={index}
              onClick={loadP(item)}
              className={activeNum === item ? active : page}
            >
              {item + 1}
            </li>
          ))}
          {activeNum < 35 ? <li>...</li> : ""}
          <li onClick={loadP(40)} className={activeNum === 40 ? active : page}>
            41
          </li>
          <li onClick={loadP(activeNum + 1)} className="arrow-right active">
            &#129094;
          </li>
        </ul>
      ) : (
        <ul className="list-pages">
          <li onClick={loadP(activeNum - 1)} className="arrow-left active">
            &#129092; Page 41
          </li>
          <li onClick={loadP(0)} className={activeNum === 0 ? active : page}>
            1
          </li>
          <li onClick={loadP(activeNum + 1)} className="arrow-right active">
            Page 2 &#129094;
          </li>
        </ul>
      )}
    </div>
  );
}

export default Pagination;
