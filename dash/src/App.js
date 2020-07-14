import React, { Component } from 'react';
import Coins from './components/Coins';
import './components/Coins.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allcoins: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://poloniex.com/public?command=returnTicker');
    const json = await res.json();

    // CONVERTE O OBJETO RETORNADO PELA API PARA UM ARRAY DE OBJETOS
    const result = Object.entries(json).map(([key, value]) => {
      return { moeda: key, dados: value };
    });

    this.setState({
      allcoins: result,
    });
  }
 
  render() {
    const { allcoins } = this.state;

    return (
      <div className="container">
        <h1>Dash Coins</h1>
        {/* VERIFICA SE POSSUI ALGUM REGISTRO PARA SER EXIBIDO */}
        {allcoins !== undefined && <Coins coins={allcoins} />}
      </div>
    );
  }
}
