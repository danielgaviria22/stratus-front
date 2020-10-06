import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import LineChart from '../../components/LineChart';
import { Typography } from '@material-ui/core';

import "./styles.scss";

const GeneralView = () => {
  const data = [
    {value: 1, value2: 2, date: "2000", value3: 5},
    {value2: 4, date: "2001", value3: 5},
    {value: 3, date: "2002", value3: 5},
    {value2: 5, date: "2004", value3: 5}, 
    {value: 2, value2: 3, date: "2005", value3: 5},
  ];
  const series = [
    {name: 'Data1', value: 'value'},
    {name: 'Data2', value: 'value2'},
    {name: 'Data3', value: 'value3'},
  ]
  return (
    <Grid container spacing={2}>
      <Grid item container xs={4} spacing={1}>
        <Grid item xs={12}>
          <Paper>
            <div className="paper-cards">
              <Typography variant="body1">Total spent without using stratus per year</Typography>
              <Typography variant="h5">$1.780K</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="paper-cards">
              <Typography variant="body1">Total spent using stratus per year </Typography>
              <Typography variant="h5">$987</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="paper-cards">
              <Typography variant="body1">Total saved per year</Typography>
              <Typography variant="h5">$742</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="paper-cards">
              <Typography variant="body1">Total saved per year</Typography>
              <Typography variant="h5">43%</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Paper><LineChart data={data} id="Chart1" series={series} dateFormat="yyyy" title="Budget"/></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className="column">
          <Typography className="resources" variant="h5">Resources</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Instance type</TableCell>
                  <TableCell>vCPU</TableCell>
                  <TableCell>Memory</TableCell>
                  <TableCell>Cost per Hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>Small</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>14</TableCell>
                  <TableCell>$0.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>13</TableCell>
                  <TableCell>14</TableCell>
                  <TableCell>$1.0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="provider">
            <Typography variant="h6">Provider:</Typography>
            <Typography variant="body2">Amazon web Services</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Hola!</Paper>
      </Grid>
    </Grid>
  )
}

export default GeneralView;