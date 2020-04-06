import React from 'react'
import './Pagination.css';
function Pagination({handleClick}) {
    return (
        <div className="pagination">
            <ul className="list-pages">
                <li className="arrow-left active">&#129092;</li>
                <li className="active">1</li>
                <li onClick={() => handleClick(20,40)} className="pages">2</li>
                <li className="pages">3</li>
                <li className="pages">4</li>
                <li className="pages">5</li>
                <li>...</li>
                <li className="pages">50</li>
                <li className="arrow-right active">&#129094;</li>
            </ul>
        </div>
    )
}

export default Pagination
