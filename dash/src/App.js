import React, { Component } from 'react';
import Coins from './components/Coins';

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

    
    const result = Object.entries(json).map(([key, value]) => {
      return { id: key, value };
    });

    const Coins = result.map((item) => {
      return { id: item.id, last: item.value.last };
    });

    this.setState({
      allcoins: Coins,
    });
  }

  render() {
    const { allcoins } = this.state;

    return (
      <div className="container">
        <h1>Dash Coins</h1>

        {allcoins !== undefined && <Coins coin={allcoins} />}
      </div>
    );
  }
}
