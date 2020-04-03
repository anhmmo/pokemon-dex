import React from 'react'
import './Loading.css';
import pikachu from './pikachu.png';


const Loading = () => {
    return (
        <div id="load">
            <img src={pikachu} className="imgbox" alt="pikachu" />
            <div id="loader">
                <div className="pair pair-1">
                    <span className="dot dot-1" />
                    <span className="dot dot-2" />
                </div>
                <div className="pair pair-2">
                    <span className="dot dot-1" />
                    <span className="dot dot-2" />
                </div>
                <div className="loading-txt">Loading</div>
            </div>
        </div>
    )
}

export default Loading
