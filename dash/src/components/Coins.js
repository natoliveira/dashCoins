import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class Coins extends Component {
  constructor(param) {
    super(param)

    this.page = 1
    this.rowsPerPage = 10
    this.columns =
      [
        "moeda",
        "last",
        "lowestAsk",
        "baseVolume",
        "high24hr",
        "highestBid",
        "isFrozen",
        "last",
        "low24hr",
        "lowestAsk",
        "percentChange",
        "quoteVolume",
      ];

  }

  render() {
    const { coins } = this.props;

    return (
      <Table>
        <div className="data">
        <TableHead>
          <TableRow>
            {this.columns.map((column) => (
              <TableCell
                key={column}
              //align={column.align}
              //style={{ minWidth: 10}}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map(({ moeda, dados }) => {
            return (
              <tr>
                <TableCell><button type="button" className="btn btn-{moeda}">{moeda}</button>
                </TableCell>
                <TableCell>{dados.last} </TableCell>
                <TableCell>{dados.lowestAsk} </TableCell>
                <TableCell>{dados.baseVolume} </TableCell>
                <TableCell>{dados.high24hr} </TableCell>
                <TableCell>{dados.highestBid} </TableCell>
                <TableCell>{dados.isFrozen} </TableCell>
                <TableCell>{dados.last} </TableCell>
                <TableCell>{dados.low24hr} </TableCell>
                <TableCell>{dados.lowestAsk} </TableCell>
                <TableCell>{dados.percentChange} </TableCell>
                <TableCell>{dados.quoteVolume} </TableCell>
              
              </tr>
            );
          })}
        </TableBody>
        
       </div>
      </Table>

    );
  }
}