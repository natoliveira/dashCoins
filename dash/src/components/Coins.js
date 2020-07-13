import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



export default class Coins extends Component {

  render() {
    
    const { coins } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table className="coins" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Moeda</TableCell>
              <TableCell align="center">last&nbsp;</TableCell>
              <TableCell align="center">lowestAsk&nbsp;</TableCell>
              <TableCell align="center">baseVolume&nbsp;</TableCell>
              <TableCell align="center">high24hr</TableCell>
              <TableCell align="center">highestBid&nbsp;</TableCell>
              <TableCell align="center">isFrozen&nbsp;</TableCell>
              <TableCell align="center">last&nbsp;</TableCell>
              <TableCell align="center">low24hr</TableCell>
              <TableCell align="center">lowestAsk&nbsp;</TableCell>
              <TableCell align="center">percentChange&nbsp;</TableCell>
              <TableCell align="center">quoteVolume&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map(({ moeda, dados }) => (
              <TableRow key={moeda}>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://poloniex.com/public?command=returnTicker"
                    align="center" 
                    className="btn btn-{moeda}" 
                    id="botao"
                  >
                    {moeda}
                  </Button>
                </TableCell>
                <TableCell color="primary" align="center">{dados.last} </TableCell>
                <TableCell color="primary" align="center">{dados.lowestAsk} </TableCell>
                <TableCell color="primary" align="center">{dados.baseVolume} </TableCell>
                <TableCell color="primary" align="center">{dados.high24hr} </TableCell>
                <TableCell color="primary" align="center">{dados.highestBid} </TableCell>
                <TableCell color="primary" align="center">{dados.isFrozen} </TableCell>
                <TableCell color="primary" align="center">{dados.last} </TableCell>
                <TableCell color="primary" align="center">{dados.low24hr} </TableCell>
                <TableCell color="primary" align="center">{dados.lowestAsk} </TableCell>
                <TableCell color="primary" align="center">{dados.percentChange} </TableCell>
                <TableCell color="primary" align="center">{dados.quoteVolume} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

}