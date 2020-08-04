import React, {useReducer} from 'react';
import './App.css';
import {ResourceCounter} from "./components/licznikzasobow";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Mnodalrundy} from './components/modalPoprzedniaRunda'
import {ModalKart} from "./components/modalkart";

function init() {

    // return {...initialState} ;
    return initialState
}

function reducer(state, action) {
    let newState = {...state}

    switch (action.type) {
        case 'return':
            let tymczasowakopia=state.historia;
            newState=newState.historia[action.runda];
            newState.historia=tymczasowakopia;
             tymczasowakopia=[]
            return newState;
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

            let kopia={}
                Object.assign(kopia, {...state})
kopia.historia=[]

            newState.historia.push(kopia)
 newState.numerrundy+=1;

            newState.stali=state.stali+state.stal
            newState.tytani=state.tytani+state.tytan
            if(state.meuro+state.wt+state.megakredyty>0){
                newState.megakredyty=state.meuro+state.wt+state.megakredyty
            }
            else{
                newState.megakredyty=0
            }
            newState.roslinnosci=state.roslinnosc+state.roslinnosci
             newState.cieploi=state.cieplo+state.cieploi+state.energiai
            newState.energiai=state.energia

            return newState;
        case 'set':
            newState[action.id] = action.val;
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
    wt: 20,
    roslinnosc: 0,
    roslinnosci: 0,
    energia: 0,
    energiai: 0,
    cieplo: 0,
    cieploi: 0,
    numerrundy: 1,
historia: [],
};

function App() {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState, init)
const colour = {
    ptlo: '#ffffff',
    pkol: '#FED300',
    stlo: '#89633D',
    skol: '#463118',
    ttlo: '#3B3E3D',
    tkol: '#DFDA6C',
    rtlo: '#57B233',
    rkol: '#277043',
    ctlo: '#EF482C',
    ckol: '#F4E52F',
    etlo: '#7D2D83',
    ekol: '#F8E6F6',
};
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
                                                                      dispatch={dispatch} background={colour.ptlo}
                                                                      color={colour.pkol}/>  </span>
                    <span className={classes.jeden}>  <ResourceCounter text="WT" count={state.wt} id="wt"
                                                                       dispatch={dispatch} background={colour.ptlo}
                                                                       color={colour.pkol}/> </span>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="STAL" count={state.stal} id="stal" dispatch={dispatch} background={colour.stlo}
                                     color={colour.skol}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="TYTAN " count={state.tytan} id="tytan" dispatch={dispatch} background={colour.ttlo}
                                     color={colour.tkol}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="MEGAKREDYTY" count={state.megakredyty} id="megakredyty" dispatch={dispatch}
                                     background={colour.ptlo} color={colour.pkol} />
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="STAL ILOŚĆ" count={state.stali} id="stali" dispatch={dispatch}
                                     background={colour.stlo} color={colour.skol} />
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="TYTAN ILOŚĆ" count={state.tytani} id="tytani" dispatch={dispatch}
                                     background={colour.ttlo} color={colour.tkol} />
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ROŚLINNOŚĆ" count={state.roslinnosc} id="roslinnosc" dispatch={dispatch}
                                     background={colour.rtlo} color={colour.rkol}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ENERGIA " background={colour.etlo} count={state.energia} id="energia"
                                     dispatch={dispatch} color={colour.ekol} text2="ENERGIA"/>
                </Grid>

                <Grid item xl={4}>
                    <ResourceCounter text="CIEPŁO " count={state.cieplo} id="cieplo" dispatch={dispatch}
                                     background={colour.ctlo} color={colour.ckol} text2="CIEPŁO"/>
                </Grid>


                <Grid item xl={4}>
                    <ResourceCounter text="ROŚLINNOŚĆ ILOŚĆ" count={state.roslinnosci} id="roslinnosci"
                                     dispatch={dispatch} background={colour.rtlo} color={colour.rkol}
                                     czytoilosc={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ENERGIA ILOŚĆ" count={state.energiai} id="energiai" dispatch={dispatch}
                                     background={colour.etlo} color={colour.ekol}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="CIEPŁO ILOŚĆ" count={state.cieploi} id="cieploi" dispatch={dispatch}
                                     background={colour.ctlo} color={colour.ckol} czytoilosc={true}/>
                </Grid>
                <Grid item xl={12}>
                    <Button fullWidth variant="contained" onClick={ () =>dispatch({type: 'nextround'})} className={classes.button}>Nowa Runda</Button>
                </Grid>
                <Grid item xl={12}>
                    <Button fullWidth variant="contained" onClick={() =>dispatch({type: 'reset'})}
                            className={classes.button}>Zeruj</Button>
                </Grid>
                 <Grid item xl={12}>
                    <Mnodalrundy text="Historia" kolory={colour} stan={state.historia} dispatch={dispatch}/>
                </Grid>
<Grid item xl={12}>
                    <ModalKart text="karta" kolory={colour} stan={state} dispatch={dispatch}/>
                </Grid>
            </Grid>

        </div>
    )


}


export default App
