import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import CardList from './components/CardList/CardList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      conditionalList: [],
      defaultList: [],
      listPokemon: [],
      input : '',
      startN: 1,
      endN: 21
    };

      const urls = [];
      const images = [];
      
      for(let i = 1; i < 808; i++) {
        images.push(`https://aun.codes/pokemon/${i}.png`);
        urls.push("https://pokeapi.co/api/v2/pokemon/" + i);
      }
  
      Promise.all(urls.map(url =>
          fetch(url).then(pages => pages.json())
      ))
      .then(pages => {

          pages.forEach((item,index) => item.images = images[index]);

          this.setState({
            conditionalList: pages.map(item => item),
            defaultList: pages.map(item => item)
          },
          () => { 
            console.log("constructor"); 
            //console.log(this.state.defaultList);
          });
      })
      .catch(err => console.log('ughhhh fix it!', err));
  
}

loadPages = (stateNumber) => {
  this.setState(
      {
      startN: (stateNumber * 2 * 10) + 1, 
      endN: (stateNumber * 2 * 10) + 21
      }
    );
}

handleInputTypes = (event) => {
  this.setState({input: event.target.value}, () => {console.log(this.state.input)});
}


componentDidMount() {

        const urls = [];
        const images = [];
        
        for(let i = this.state.startN; i < this.state.endN; i++) {
          images.push(`https://aun.codes/pokemon/${i}.png`);
          urls.push("https://pokeapi.co/api/v2/pokemon/" + i);
        }
        
        Promise.all(urls.map(url =>
            fetch(url).then(pages => pages.json())
        ))
        .then(pages => {

            pages.forEach((item,index) => item.images = images[index]);
            
            this.setState({
              
              listPokemon: pages.map(item => item)
              .filter(item => item.name
              .includes(this.state.input))
            },
            () => { 
              
              console.log("componentDidMount"); 
              console.log(this.state.listPokemon);
              
            });
        })
        .catch(err => console.log('ughhhh fix it!', err));

}

componentDidUpdate(prevProps, prevState) {
  if (prevState.startN !== this.state.startN) {
  
      const urls = [];
        
        
        for(let i = this.state.startN; i < this.state.endN; i++) {
          urls.push(this.state.defaultList[i-1]);
        }
    
            this.setState({
              listPokemon: urls.map(item => item)
              .filter(item => item.name
              .includes(this.state.input))
            },
            () => { 
              console.log("componentDidUpdate when change Pages"); 
              console.log(this.state.listPokemon);
            });
  }


  if (prevState.input !== this.state.input) {
  
    const urls = [];
      
      for(let i = 0; i < 807; i++) {
        urls.push(this.state.defaultList[i]);
      }
  
          this.setState({
            listPokemon: urls.map(item => item)
            .filter(item => item.name
            .includes(this.state.input))
          },
          () => { 
            console.log("componentDidUpdate when input"); 
            console.log(this.state.listPokemon);
          });
  }

}


  render() {
    return (
      <div className="App">
        {
          this.state.conditionalList.length <= 0 ? 
          <Loading /> 
          :
          <CardList handleInput={this.handleInputTypes} handleClick={this.loadPages} pokemon = {this.state.listPokemon} />
        }
        
      </div>
    );
  }
 
}

export default App;
