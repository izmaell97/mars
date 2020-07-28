import React from 'react';
import './App.css';
import {ResourceCounter} from "./components/licznikzasobow";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>({
    root:{
        background: ' radial-gradient(circle, rgba(176,176,176,1) 7%, rgba(180,173,167,1) 19%, rgba(166,162,162,1) 46%, rgba(162,162,162,1) 78%, rgba(215,213,210,1) 99%)',
    },
    button: {
        fontSize: 30,
        color: "white",
        backgroundColor: "darkcyan",


    }


}));
function App() {
 const classes = useStyles();

  return   (
        <div className={classes.root} >

    <Grid container spacing={2} >
         <Grid item xl={4}>
        <ResourceCounter text="puste" background='white' color='black' text2="puste" />
         </Grid>
        <Grid item xl={4}>
          <ResourceCounter text="STAL ILOŚĆ" background='#7f2a14' color='grey' text2="STAL" />
          </Grid>
          <Grid item xl={4}>
          <ResourceCounter text="TYTAN ILOŚĆ" background='black' color='goldenrod' text2="TYTAN" />
          </Grid>
        <Grid item xl={4}>
        <ResourceCounter  text="ROŚLINNOŚĆ ILOŚĆ" background='darkolivegreen' color='darkkhaki' text2="ROŚLINNOŚĆ" />
        </Grid>
       <Grid item xl={4}>
        <ResourceCounter text="ENERGIA ILOŚĆ" background='darkmagenta' color='azure' text2="ENERGIA" />
       </Grid>
        <Grid item xl={4}>
            <ResourceCounter text="CIEPŁO ILOŚĆ" background='CRIMSON' color='YELLOW' text2="CIEPŁO" />
        </Grid>
  <Grid item xl={12}>
          <Button fullWidth  variant="contained" className={classes.button} >Nowa Runda</Button>
        </Grid>
 </Grid>

  </div>
      )




}

export default App
