import React, { Component } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import CardList from "./components/CardList/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultList: [],
      listPokemon: [],
      input: "",
      startNumber: 1,
      endNumber: 21,
    };

    console.log("constructor");
  }

  loadPages = (stateNumber) => {
    this.setState({
      startNumber: stateNumber * 2 * 10 + 1,
      endNumber: stateNumber * 2 * 10 + 21,
    });
  };

  handleInputTypes = (event) => {
    this.setState(
      { input: event.target.value }
      /*, () => {console.log(this.state.input)}*/
    );
  };

  hasUpdateFromComponent = (startN, endN, otherNumber) => {
    const urls = [];
    for (let i = startN; i < endN; i++) {
      urls.push(this.state.defaultList[i - otherNumber]);
    }

    this.setState(
      {
        listPokemon: [].concat(
          urls
            .map((item) => item)
            .filter((item) => item.name.includes(this.state.input))
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

    Promise.all(urls.map((url) => fetch(url).then((pages) => pages.json())))
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.startNumber !== this.state.startNumber) {
      this.hasUpdateFromComponent(
        this.state.startNumber,
        this.state.endNumber,
        1
      );
    }

    if (prevState.input !== this.state.input) {
      this.hasUpdateFromComponent(0, 807, 0);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.defaultList.length <= 0 ? (
          <Loading />
        ) : (
          <CardList
            handleInput={this.handleInputTypes}
            handleClick={this.loadPages}
            pokemon={this.state.listPokemon}
          />
        )}
      </div>
    );
  }
}

export default App;
