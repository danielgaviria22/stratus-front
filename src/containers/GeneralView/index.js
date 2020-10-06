import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const GeneralView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper>Hola!</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>Hola!</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Hola!</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Hola!</Paper>
      </Grid>
    </Grid>
  )
}

export default GeneralView;