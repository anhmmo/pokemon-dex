import React from "react";
import "./CardList.css";
import SearchBox from "./SearchBox/SearchBox";
import Footer from "./Footer/Footer";
import Github from "./Github/Github";
import Pagination from "./Pagination/Pagination";
import Card from "./Card/Card";
import Filter from "./Filter/Filter";
import Modal from "./Modal/Modal";
//import SortLeft from "./SortLeft/SortLeft";

class CardList extends React.Component {
  render() {
    const {
      pokemon,
      handleClick,
      handleInput,
      pages,
      actives,
      activeN,
      input,
      nextPages,
      onClickButton,
      modalLoaded,
      openModal,
      openBoxModalInfo,
      closeModalInfo,
      pokemonName,
      modalRef,
      width,
      /*  checkOpenMenu,
      openMenu, */
    } = this.props;

    return (
      <div id="pokemon">
        <Github />
        <div className="input-container">
          {/*<h1 onClick={handleClick(0)}>POKEMON DEX</h1>*/}
          <SearchBox handleInput={handleInput} />
        </div>

        <Modal
          modalLoaded={modalLoaded}
          openModal={openModal}
          closeModalInfo={closeModalInfo}
          pokemonName={pokemonName}
          modalRef={modalRef}
        />
        {/*check if width equal 0 (not call yet) or width more than 560px, then show pagination, else display: none*/}
        {width > 560 || width === 0 ? (
          <Pagination
            loadP={handleClick}
            page={pages}
            active={actives}
            activeNum={activeN}
            nextPage={nextPages}
            pokemon={pokemon}
          />
        ) : (
          ""
        )}
        <Filter onClickButton={onClickButton} />
        {/* <SortLeft
          checkOpenMenu={checkOpenMenu}
          openMenu={openMenu}
          onClickButton={onClickButton}
        /> */}
        <div className="pokemon-container">
          {pokemon.length > 0 ? (
            pokemon.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  imageSrc={item.images}
                  alt={item.name}
                  types={
                    item.types.length > 1
                      ? item.types[0].type.name + ", " + item.types[1].type.name
                      : item.types[0].type.name
                  }
                  order={item.id}
                  openBoxModalInfo={openBoxModalInfo}
                />
              );
            })
          ) : (
            <div className="not-found">Not found {input}</div>
          )}
        </div>

        <Pagination
          loadP={handleClick}
          page={pages}
          active={actives}
          activeNum={activeN}
          nextPage={nextPages}
          pokemon={pokemon}
        />

        <Footer />
      </div>
    );
  }
}

export default CardList;
