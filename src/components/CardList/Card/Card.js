import React from 'react'
import './Card.css';

const Card = ({imageSrc, alt, types, order, name}) => {
    

    let idNumber = "#00" + order;
    if(order > 9 && order <= 99) {
        idNumber = "#0" + order;
    } else if(order > 99) {
        idNumber = "#" + order;
    }
    
    return (
        <div className="pk-1">
            <div className={"box " + types}>
                <div className="img-container">
                    <img src={imageSrc} onError={(e)=>{e.target.onerror = null; e.target.src='https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_1280.png'}} alt={alt} />
                </div>
                <div className="info">
                    <span className="number">{idNumber}</span>
                    {name.length > 16 ? <h3 className="name smaller-font">{name}</h3> : <h3 className="name">{name}</h3>}
                    <small className="type">Type: <span>{types}</span></small>
                </div>
                <div className="submit-button">info</div>
            </div>
        </div>
    )
}

export default Card


