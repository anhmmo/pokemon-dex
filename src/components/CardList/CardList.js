import React from 'react'
import './CardList.css';
import SearchBox from './SearchBox/SearchBox';
import Footer from './Footer/Footer';
import Github from './Github/Github';
import Pagination from './Pagination/Pagination';
import Card from './Card/Card';

const CardList = ({pokemon, listImage}) => {

    let pokemonList1 = [];

    function loadPages() {
        for (let index = 0; index < 20; index++) {
            pokemonList1.push(pokemon[index]);
        }
    };


    //test second branch

    loadPages();

    return (

            <div id="pokemon">
           
                <Github />
               
                <div className="input-container">
                    <h1>POKEMON DEX</h1>
                   
                    <SearchBox />
                </div>

               <div className="pokemon-container">

                    {pokemonList1.map((item, index) => {
                        
                        return(
                            <Card 
                                key={index}
                                name = {item.name}
                                imageSrc= {listImage[index]}
                                alt= {item.name}
                                types = {(item.types.length > 1 ? item.types[1].type.name : item.types[0].type.name)}
                                order = {item.id}
                            />
                        )

                    }) 
                    }

                </div> 

                <Pagination handleClick={loadPages} />
                <Footer />
            </div>
        
    )
}

export default CardList
