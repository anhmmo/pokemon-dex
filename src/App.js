import React, { Component, createRef } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import CardList from "./components/CardList/CardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
    this.state = {
      defaultList: [],
      listPokemon: [],
      input: "",
      startNumber: 1,
      endNumber: 21,
      pages: "pages",
      actives: "active",
      activeNumber: 0,
      nextPages: [0, 1, 2, 3, 4],
      filter: 0,
      modalLoaded: false,
      openModal: false,
      pokemonName: [],
      width: 0,
      height: 0,
      openMenu: false,
    };

    console.log("constructor");
  }

  onClickOutside = (e) => {
    const element = e.target;
    if (this.modalRef.current && !this.modalRef.current.contains(element)) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ openModal: false });
    }
  };

  updateWindowDimensions = () => {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => console.log(this.state.width + " " + this.state.height)
    );
  };

  openBoxModalInfo = (pokemon) => {
    return () => {
      this.setState(
        (state) => ({
          openModal: true,
          pokemonName: state.defaultList[pokemon - 1],
        }),
        () => console.log(this.state.pokemonName)
      );
      if (this.state.defaultList[pokemon - 1]) {
        setTimeout(() => {
          this.setState({ modalLoaded: true });
        }, 2000);
      }
    };
  };

  closeModalInfo = () => {
    this.setState({ openModal: false });
  };

  onClickButton = (event) => {
    let values = +event.target.getAttribute("name");
    this.setState({ filter: values, openMenu: false });
  };

  checkOpenMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  /*
    const totalArr = [
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [0, 1, 2, 3, 4],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [5, 6, 7, 8, 9],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [10, 11, 12, 13, 14],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [15, 16, 17, 18, 19],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [20, 21, 22, 23, 24],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [25, 26, 27, 28, 29],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [30, 31, 32, 33, 34],
        activeNumber: stateNumber,
      },
      {
        startNumber: startN,
        endNumber: endN,
        nextPages: [35, 36, 37, 38, 39],
        activeNumber: stateNumber,
      },
      {
        startNumber: 801,
        endNumber: 808,
        nextPages: [35, 36, 37, 38, 39],
        activeNumber: 40,
      },
      {
        startNumber: 1,
        endNumber: 21,
        nextPages: [0, 1, 2, 3, 4],
        activeNumber: 0,
      },
    ];

    */

  loadPages = (stateNumber) => {
    const startN = stateNumber * 2 * 10 + 1;
    const endN = stateNumber * 2 * 10 + 21;
    const totalArr = [];

    for (let i = 0; i < 10; i++) {
      totalArr.push({
        startNumber: startN,
        endNumber: endN,
        nextPages: [],
        activeNumber: stateNumber,
      });
    }

    let pagePosition = 0;
    for (let i = 0; i < 8; i++) {
      totalArr[i].nextPages = [
        pagePosition,
        ++pagePosition,
        ++pagePosition,
        ++pagePosition,
        ++pagePosition,
      ];
      ++pagePosition;
    }
    totalArr[8] = {
      startNumber: 801,
      endNumber: 808,
      nextPages: [35, 36, 37, 38, 39],
      activeNumber: 40,
    };
    totalArr[9] = {
      startNumber: 1,
      endNumber: 21,
      nextPages: [0, 1, 2, 3, 4],
      activeNumber: 0,
    };

    if (stateNumber >= 0 && stateNumber <= 4) {
      return () => {
        this.setState(totalArr[0]);
      };
    } else if (stateNumber >= 5 && stateNumber <= 9) {
      return () => {
        this.setState(totalArr[1]);
      };
    } else if (stateNumber >= 10 && stateNumber <= 14) {
      return () => {
        this.setState(totalArr[2]);
      };
    } else if (stateNumber >= 15 && stateNumber <= 19) {
      return () => {
        this.setState(totalArr[3]);
      };
    } else if (stateNumber >= 20 && stateNumber <= 24) {
      return () => {
        this.setState(totalArr[4]);
      };
    } else if (stateNumber >= 25 && stateNumber <= 29) {
      return () => {
        this.setState(totalArr[5]);
      };
    } else if (stateNumber >= 30 && stateNumber <= 34) {
      return () => {
        this.setState(totalArr[6]);
      };
    } else if (stateNumber >= 35 && stateNumber < 40) {
      return () => {
        this.setState(totalArr[7]);
      };
    } else if (stateNumber === 40) {
      return () => {
        this.setState(totalArr[8]);
      };
    } else if (stateNumber > 40) {
      return () => {
        this.setState(totalArr[9]);
      };
    } else if (stateNumber < 0) {
      return () => {
        this.setState(totalArr[8]);
      };
    }
  };

  handleInputTypes = (event) => {
    this.setState(
      { input: event.target.value }
      /*, () => {console.log(this.state.input)}*/
    );
  };

  hasUpdateFromComponent = (startN, endN, otherNumber) => {
    let urls = [];
    if (otherNumber === 0) {
      urls = this.state.defaultList;
      this.setState({ activeNumber: 0 });
    } else {
      for (let i = startN; i < endN; i++) {
        urls.push(this.state.defaultList[i - otherNumber]);
      }
    }
    /*
    let arrNew = [].concat(
      urls
        .map((item) => item)
        .filter((item) =>
          item.name.toUpperCase().includes(this.state.input.toUpperCase())
        )
    );
    arrNew.length = 20;
    let brrnew = arrNew.slice();
*/
    this.setState(
      {
        listPokemon: [].concat(
          urls
            .map((item) => item)
            .filter((item) =>
              item.name.toUpperCase().includes(this.state.input.toUpperCase())
            )
        ),
      },
      () => {
        console.log("componentDidUpdate");
        //console.log(this.state.listPokemon);
      }
    );
  };

  componentDidMount() {
    const urls = [],
      images = [];

    for (let i = 1; i < 808; i++) {
      images.push(`https://aun.codes/pokemon/${i}.png`);
      urls.push("https://pokeapi.co/api/v2/pokemon/" + i);
    }

    (async () => {
      Promise.all(
        urls.map(
          async (url) =>
            await fetch(url).then(async (pages) => await pages.json())
        )
      )
        .then((pages) => {
          pages.forEach(
            async (item, index) => await (item.images = images[index])
          ); //add new property name images to pages object

          this.setState(
            {
              defaultList: [].concat(pages.map((item) => item)),
              listPokemon: [].concat(pages.filter((item) => item.id < 21)), //filter all item from 1-21
            },
            () => {
              console.log("componentDidMount");
              console.log(this.state.listPokemon);
            }
          );
        })
        .catch((err) => console.log("ughhhh fix it!", err));
    })();

    //call api via fetch Promise.All
    /*Promise.all(urls.map((url) => fetch(url).then((pages) => pages.json())))
      .then((pages) => {
        pages.forEach((item, index) => (item.images = images[index])); //add new property name images to pages object

        this.setState(
          {
            defaultList: [].concat(pages.map((item) => item)),
            listPokemon: [].concat(pages.filter((item) => item.id < 21)), //filter all item from 1-21
          },
          () => {
            console.log("componentDidMount");
            //console.log(this.state.listPokemon);
          }
        );
      })
      .catch((err) => console.log("ughhhh fix it!", err));
      */

    document.addEventListener("click", this.onClickOutside);
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.startNumber !== this.state.startNumber) {
      this.hasUpdateFromComponent(
        this.state.startNumber,
        this.state.endNumber,
        1
      );
    }

    if (prevState.filter !== this.state.filter) {
      let arr,
        filterN = this.state.filter,
        defaultArr = this.state.defaultList;
      if (filterN === 1) {
        arr = defaultArr.sort((a, b) => a.id - b.id);
      } else if (filterN === 2) {
        arr = defaultArr.sort((a, b) => b.id - a.id);
      } else if (filterN === 3) {
        arr = defaultArr.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      } else if (filterN === 4) {
        arr = defaultArr.sort((a, b) =>
          b.name > a.name ? 1 : a.name > b.name ? -1 : 0
        );
      } else if (filterN === 5) {
        arr = defaultArr.sort((a, b) =>
          a.types[0].type.name > b.types[0].type.name
            ? 1
            : b.types[0].type.name > a.types[0].type.name
            ? -1
            : 0
        );
      } else if (filterN === 6) {
        arr = defaultArr.sort((a, b) =>
          b.types[0].type.name > a.types[0].type.name
            ? 1
            : a.types[0].type.name > b.types[0].type.name
            ? -1
            : 0
        );
      }
      this.setState({ listPokemon: arr });
    }

    if (prevState.input !== this.state.input) {
      this.hasUpdateFromComponent(0, 807, 0);
    }
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.defaultList.length <= 0 ? (
          <Loading />
        ) : (
          <CardList
            handleInput={this.handleInputTypes}
            handleClick={this.loadPages}
            pokemon={this.state.listPokemon}
            pages={this.state.pages}
            actives={this.state.actives}
            activeN={this.state.activeNumber}
            input={this.state.input}
            nextPages={this.state.nextPages}
            onClickButton={this.onClickButton}
            openMenu={this.state.openMenu}
            checkOpenMenu={this.checkOpenMenu}
            modalLoaded={this.state.modalLoaded}
            openModal={this.state.openModal}
            openBoxModalInfo={this.openBoxModalInfo}
            closeModalInfo={this.closeModalInfo}
            pokemonName={this.state.pokemonName}
            modalRef={this.modalRef}
            width={this.state.width}
          />
        )}
      </div>
    );
  }
}

export default App;
