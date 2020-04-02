import React from 'react'
import './CardList.css';

const CardList = () => {
    
    return (
       
            <div id="pokemon">

                <div className="pk-1">
                    <div className="box bg-1">
                        <div className="img-container">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="Bulbasaur" />
                        </div>
                        <div className="info">
                            <span className="number">#001</span>
                            <h3 className="name">Bulbasaur</h3>
                            <small className="type">Type: <span>grass</span></small>
                        </div>
                    </div>
                </div>

                <div className="pk-1">
                    <div className="box bg-2">
                        <div className="img-container">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/2.png" alt="Bulbasaur" />
                        </div>
                        <div className="info">
                            <span className="number">#001</span>
                            <h3 className="name">Bulbasaur</h3>
                            <small className="type">Type: <span>grass</span></small>
                        </div>
                    </div>
                </div>

                <div className="pk-1">
                    <div className="box bg-3">
                        <div className="img-container">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/3.png" alt="Bulbasaur" />
                        </div>
                        <div className="info">
                            <span className="number">#001</span>
                            <h3 className="name">Bulbasaur</h3>
                            <small className="type">Type: <span>grass</span></small>
                        </div>
                    </div>
                </div>

                <div className="pk-1">
                    <div className="box bg-4">
                        <div className="img-container">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/4.png" alt="Bulbasaur" />
                        </div>
                        <div className="info">
                            <span className="number">#001</span>
                            <h3 className="name">Bulbasaur</h3>
                            <small className="type">Type: <span>grass</span></small>
                        </div>
                    </div>
                </div>

                
            </div>
        
    )
}

export default CardList
