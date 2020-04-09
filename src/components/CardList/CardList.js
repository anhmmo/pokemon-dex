import React from "react";
import "./CardList.css";
import SearchBox from "./SearchBox/SearchBox";
import Footer from "./Footer/Footer";
import Github from "./Github/Github";
import Pagination from "./Pagination/Pagination";
import Card from "./Card/Card";

class CardList extends React.Component {
  render() {
    const {
      pokemon,
      handleClick,
      handleInput,
      pages,
      actives,
      activeN,
    } = this.props;
    return (
      <div id="pokemon">
        <Github />
        <div className="input-container">
          <h1 onClick={handleClick(0)}>POKEMON DEX</h1>
          <SearchBox handleInput={handleInput} />
        </div>

        <Pagination
          loadP={handleClick}
          page={pages}
          active={actives}
          activeNum={activeN}
        />

        <div className="pokemon-container">
          {pokemon.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                imageSrc={item.images}
                alt={item.name}
                types={
                  item.types.length > 1
                    ? item.types[1].type.name
                    : item.types[0].type.name
                }
                order={item.id}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    );
  }
}

export default CardList;
