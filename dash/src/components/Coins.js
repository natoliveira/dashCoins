import React, { Component } from 'react';

export default class Coins extends Component {
  render() {
    const { coins } = this.props;
    console.log(coins);

    return (
      <table className="striped center">
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Last</th>
            <th>Lowest Ask</th>
            <th>Volume</th>
            <th>Maior Preço</th>
            <th>Maior Lance</th>
            <th>Congelada</th>
            <th>Ultima</th>
            <th>Menor Preço</th>
            <th>Menor Pedido</th>
            <th>Percent. Mudança</th>
            <th>Volume</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(({ moeda, dados }) => {
            return (
              <tr key={moeda}>
                <td>{moeda}</td>
                <td>{dados.last}</td>
                <td>{dados.lowestAsk}</td>
                <td>{dados.baseVolume}</td>
                <td>{dados.high24hr}</td>
                <td>{dados.highestBid}</td>
                <td>{dados.isFrozen}</td>
                <td>{dados.last}</td>
                <td>{dados.low24hr}</td>
                <td>{dados.lowestAsk}</td>
                <td>{dados.percentChange}</td>
                <td>{dados.quoteVolume}</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
