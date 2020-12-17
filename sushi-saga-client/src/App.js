import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [], 
    eaten: [], 
    display: [], 
    index: 0, 
    money: 200
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(res => res.json())
    .then(allSushi => {
      this.setState({sushi: allSushi})
      this.displayMore()
    })
  }

  eatSushi = (sushi) => {
    // console.log(sushi)
    if(this.state.money >= sushi.price){
      this.setState(prevState => ({
        sushi: prevState.sushi.filter(sushiItem => sushiItem !== sushi), 
        display: prevState.display.filter(sushiItem => sushiItem !== sushi), 
        eaten: [sushi, ...prevState.eaten]
      })) 
      this.setState(prevState => ({
        money: [prevState.money - sushi.price]
      }))
    } 
  }

  displayMore = () => {
    const { sushi, index } = this.state 
    const newIn = sushi.length - index <= 4 ? 0 : index + 4
    this.setState({
      display: [sushi[index], sushi[index+1], sushi[index+2], sushi[index+3]], 
      index: newIn
    })
    console.log(this.state.index)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eat={this.eatSushi} more={this.displayMore} display={this.state.display}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;