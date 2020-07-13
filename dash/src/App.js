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
  async componentDidMount2() {
    // const res = await fetch('https://poloniex.com/public?command=returnTicker');
    
    var socket = new WebSocket('wss://api2.poloniex.com')
    socket.onopen = function(event) {
      console.log('WebSocket is connected.', event.data);
      var obj = JSON.stringify({'command': "subscribe", "channel": 1003})
      console.log(obj)
      socket.send(obj)
    };
    socket.onmessage = function(event) {
      //console.log(JSON.parse(event.data))
      //console.debug("WebSocket message received:", event);
      var res = event.data
      //console.log(res)
      if(res !== "[1010]"){
        console.log(res)
      }
      // const result = Object.entries(json).map(([key, value]) => {
      //   return { moeda: key, dados: value };
      //   console.log(result)
      // });
      
      //var obj = JSON.stringify({'command': "unsubscribe", "channel": 1002})
      //console.log(obj)
    };
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
