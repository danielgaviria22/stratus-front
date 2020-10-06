import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const StatusDataView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container xs={8} spacing={2}>
        <Grid item xs={12}>
          <Paper><div>Hola!</div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper><p>Hola!</p></Paper>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Paper><p>Hola!</p></Paper>
      </Grid>
    </Grid>
  )
}

export default StatusDataView;