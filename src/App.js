import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import CardList from './components/CardList/CardList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      listPokemon: [],
      listImage: []
    }
   
  }


componentDidMount() {
  
    setTimeout(() => {
        const urls = [];
        const images = [];

        for(let i = 1; i < 808; i++) {
          images.push(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`);
        }

        for(let i = 1; i < 808; i++) {
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
