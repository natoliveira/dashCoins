import React, { Component } from 'react';

export default class Coins extends Component {
  render() {
    const { coin } = this.props;

    console.log(coin);
    return (
      <div>
        <ul>
          {coin.map((Coin) => {
            return (
              <li Key={Coin.id}>
                {Coin.id} - {Coin.last}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
