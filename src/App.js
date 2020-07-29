import React, {useReducer} from 'react';
import './App.css';
import {ResourceCounter} from "./components/licznikzasobow";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function init() {

    // return {...initialState} ;
    return initialState
}

function reducer(state, action) {
    let newState = {...state}

    switch (action.type) {
        case 'increment':
            newState[action.id] += 1;
            return newState;
        case 'decrement':
            newState[action.id] -= 1;
            return newState;
        case 'maxdecrement':
            newState[action.id] -= 8;
            return newState;
        case 'reset':
            return init();
        case 'nextround':
            newState.stali=state.stali+state.stal
            newState.tytani=state.tytani+state.tytan
            newState.megakredyty=state.meuro+state.mt+state.megakredyty
            newState.roslinnosci=state.roslinnosc+state.roslinnosci
             newState.cieploi=state.cieplo+state.cieploi+state.energiai
            newState.energiai=state.energia

            return newState;
        default:
            throw new Error();
    }
}


const useStyles = makeStyles((theme) => ({
    root: {
        background: ' radial-gradient(circle, rgba(176,176,176,1) 7%, rgba(180,173,167,1) 19%, rgba(166,162,162,1) 46%, rgba(162,162,162,1) 78%, rgba(215,213,210,1) 99%)',
    },
    button: {
        fontSize: 30,
        color: "white",
        backgroundColor: "darkcyan",


    },
    jeden: {
        width: '50%',
    }


}));
const initialState = {
    stal: 0,
    stali: 0,
    tytan: 0,
    tytani: 0,
    megakredyty: 0,
    meuro: 0,
    mt: 0,
    roslinnosc: 0,
    roslinnosci: 0,
    energia: 0,
    energiai: 0,
    cieplo: 0,
    cieploi: 0,

};

function App() {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState, init)

    return (
        <div className={classes.root}>

            <Grid container spacing={1} justify="stretch">
                <Grid item xl={4}
                      container
                    // justify-items= "stretch"
                      direction="row"
                      alignItems="baseline"
                      justify="center"
                >
                    <span className={classes.jeden}> <ResourceCounter text="M€" count={state.meuro} id="meuro"
                                                                      dispatch={dispatch} background='white'
                                                                      color='black'/>  </span>
                    <span className={classes.jeden}>  <ResourceCounter text="MT" count={state.mt} id="mt"
                                                                       dispatch={dispatch} background='white'
                                                                       color='black'/> </span>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="STAL" count={state.stal} id="stal" dispatch={dispatch} background='#7f2a14'
                                     color='grey'/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="TYTAN " count={state.tytan} id="tytan" dispatch={dispatch} background='black'
                                     color='goldenrod'/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="MEGAKREDYTY" count={state.megakredyty} id="megakredyty" dispatch={dispatch}
                                     background='white' color='black' czytoilosc={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="STAL ILOŚĆ" count={state.stali} id="stali" dispatch={dispatch}
                                     background='#7f2a14' color='grey' czytoilosc={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="TYTAN ILOŚĆ" count={state.tytani} id="tytani" dispatch={dispatch}
                                     background='black' color='goldenrod' czytoilosc={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ROŚLINNOŚĆ" count={state.roslinnosc} id="roslinnosc" dispatch={dispatch}
                                     background='darkolivegreen' color='darkkhaki'/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ENERGIA " background='darkmagenta' count={state.energia} id="energia"
                                     dispatch={dispatch} color='azure' text2="ENERGIA"/>
                </Grid>

                <Grid item xl={4}>
                    <ResourceCounter text="CIEPŁO " count={state.cieplo} id="cieplo" dispatch={dispatch}
                                     background='CRIMSON' color='YELLOW' text2="CIEPŁO"/>
                </Grid>


                <Grid item xl={4}>
                    <ResourceCounter text="ROŚLINNOŚĆ ILOŚĆ" count={state.roslinnosci} id="roslinnosci"
                                     dispatch={dispatch} background='darkolivegreen' color='darkkhaki'
                                     czytoilosc={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ENERGIA ILOŚĆ" count={state.energiai} id="energiai" dispatch={dispatch}
                                     background='darkmagenta' color='azure' czytoilosc={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="CIEPŁO ILOŚĆ" count={state.cieploi} id="cieploi" dispatch={dispatch}
                                     background='CRIMSON' color='YELLOW' czytoilosc={true}/>
                </Grid>
                <Grid item xl={12}>
                    <Button fullWidth variant="contained" onClick={ () =>dispatch({type: 'nextround'})} className={classes.button}>Nowa Runda</Button>
                </Grid>
                <Grid item xl={12}>
                    <Button fullWidth variant="contained" onClick={() =>dispatch({type: 'reset'})}
                            className={classes.button}>Zeruj</Button>
                </Grid>
            </Grid>

        </div>
    )


}


export default App
