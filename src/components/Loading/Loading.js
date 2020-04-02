import React from 'react'
import './Loading.css';

const Loading = () => {
    return (
        <div id="load">
            <img src="https://dl.dropbox.com/s/o0m2gfnqtl8zd18/pikachu__1_-removebg-preview.png?raw=0"
                className="imgbox" alt="pikachu" />
            <div id="loader">
                <div className="pair pair-1">
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                </div>
                <div className="pair pair-2">
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                </div>
                <div className="loading-txt">Loading</div>
            </div>
        </div>
    )
}

export default Loading
