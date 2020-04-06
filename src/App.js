import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import CardList from './components/CardList/CardList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      listPokemon: [],
      listImage: [],
      start: 1,
      end: 21
    }
   
  }


componentDidMount() {
  
    setTimeout(() => {
        const urls = [];
        const images = [];

        for(let i = this.state.start; i < this.state.end; i++) {
          images.push(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`);
        }

        for(let i = this.state.start; i < this.state.end; i++) {
            urls.push("https://pokeapi.co/api/v2/pokemon/" + i);
        }
    
        Promise.all(urls.map(url =>
            fetch(url).then(pages => pages.json())
        ))
        .then(pages => {
            this.setState({listPokemon: [].concat(pages.map(item => item)),
            listImage: images}, () => console.log(this.state.listPokemon));
        })
        .catch(err => console.log('ughhhh fix it!', err));
    }, 100);
   
}
  render() {
    return (
      <div className="App">
        {
          this.state.listPokemon.length <= 0 ? 
          <Loading /> 
          :
          <CardList pokemon = {this.state.listPokemon} listImage = {this.state.listImage} />
        }
      </div>
    );
  }
 
}

export default App;
