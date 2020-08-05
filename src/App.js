import React, {useReducer} from 'react';
import './App.css';
import {ResourceCounter} from "./components/licznikzasobow";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ModalRound} from './components/modalPoprzedniaRunda'
import {ModalKart} from "./components/modalkart";

function init() {

    // return {...initialState} ;
    return initialState
}

function reducer(state, action) {
    let newState = {...state}

    switch (action.type) {
        case 'return':
            let tempCopy=[]
          tempCopy  = state.hist;
            newState = newState.hist[action.turn];
            newState.hist = tempCopy;
            tempCopy = []
            return newState;
        case 'increment':
            newState[action.id] += 1;
            return newState;
        case 'decrement':
            newState[action.id] -= 1;
            return newState;
        case 'maxDecrement':
            newState[action.id] -= 8;
            return newState;
        case 'reset':
            return init();
        case 'nextRound':

            let copy = {}
            Object.assign(copy, {...state})
            copy.hist = []

            newState.hist.push(copy)
            newState.roundNumber += 1;

            newState.steelNumber = state.steelNumber + state.steel
            newState.titanNumber = state.titanNumber + state.titan
            if (state.mEuro + state.wt + state.megaCredits > 0) {
                newState.megaCredits = state.mEuro + state.wt + state.megaCredits
            } else {
                newState.megaCredits = 0
            }
            newState.bioNumber = state.bio + state.bioNumber
            newState.hotNumber = state.hot + state.hotNumber + state.energyNumber
            newState.energyNumber = state.energy

            return newState;
        case 'set':
            newState[action.id] = action.val;
            return newState;

        default:
            throw new Error();
    }
}


const useStyles = makeStyles(() => ({
    root: {
        background: ' radial-gradient(circle, rgba(176,176,176,1) 7%, rgba(180,173,167,1) 19%, rgba(166,162,162,1) 46%, rgba(162,162,162,1) 78%, rgba(215,213,210,1) 99%)',
    },
    button: {
        fontSize: 30,
        color: "white",
        backgroundColor: "darkcyan",


    },
    one: {
        width: '50%',
    }


}));
const initialState = {
    steel: 0,
    steelNumber: 0,
    titan: 0,
    titanNumber: 0,
    megaCredits: 0,
    mEuro: 0,
    wt: 20,
    bio: 0,
    bioNumber: 0,
    energy: 0,
    energyNumber: 0,
    hot: 0,
    hotNumber: 0,
    roundNumber: 1,
    hist: [],
};

function App() {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState, init)
    const colour = {
        whiteBackground: '#ffffff',
        whiteColour: '#FED300',
        steelBackground: '#89633D',
        steelColour: '#463118',
        titanBackground: '#3B3E3D',
        titanColour: '#DFDA6C',
        bioBackground: '#57B233',
        bioColour: '#277043',
        hotBackground: '#EF482C',
        hotColour: '#F4E52F',
        energyBackground: '#7D2D83',
        energyColour: '#F8E6F6',
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
                    <span className={classes.one}> <ResourceCounter text="M€" count={state.mEuro} id="mEuro"
                                                                    dispatch={dispatch}
                                                                    background={colour.whiteBackground}
                                                                    color={colour.whiteColour}/>  </span>
                    <span className={classes.one}>  <ResourceCounter text="WT" count={state.wt} id="wt"
                                                                     dispatch={dispatch}
                                                                     background={colour.whiteBackground}
                                                                     color={colour.whiteColour}/> </span>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="STAL" count={state.steel} id="steel" dispatch={dispatch}
                                     background={colour.steelBackground}
                                     color={colour.steelColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="TYTAN " count={state.titan} id="titan" dispatch={dispatch}
                                     background={colour.titanBackground}
                                     color={colour.titanColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="MEGAKREDYTY" count={state.megaCredits} id="megaCredits" dispatch={dispatch}
                                     background={colour.whiteBackground} color={colour.whiteColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="STAL ILOŚĆ" count={state.steelNumber} id="steelNumber" dispatch={dispatch}
                                     background={colour.steelBackground} color={colour.steelColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="TYTAN ILOŚĆ" count={state.titanNumber} id="titanNumber" dispatch={dispatch}
                                     background={colour.titanBackground} color={colour.titanColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ROŚLINNOŚĆ" count={state.bio} id="bio" dispatch={dispatch}
                                     background={colour.bioBackground} color={colour.bioColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ENERGIA " count={state.energy} id="energy"
                                     dispatch={dispatch} background={colour.energyBackground}
                                     color={colour.energyColour}/>
                </Grid>

                <Grid item xl={4}>
                    <ResourceCounter text="CIEPŁO " count={state.hot} id="hot" dispatch={dispatch}
                                     background={colour.hotBackground} color={colour.hotColour}/>
                </Grid>


                <Grid item xl={4}>
                    <ResourceCounter text="ROŚLINNOŚĆ ILOŚĆ" count={state.bioNumber} id="bioNumber"
                                     dispatch={dispatch} background={colour.bioBackground} color={colour.bioColour}
                                     isBig={true}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="ENERGIA ILOŚĆ" count={state.energyNumber} id="energyNumber"
                                     dispatch={dispatch}
                                     background={colour.energyBackground} color={colour.energyColour}/>
                </Grid>
                <Grid item xl={4}>
                    <ResourceCounter text="CIEPŁO ILOŚĆ" count={state.hotNumber} id="hotNumber" dispatch={dispatch}
                                     background={colour.hotBackground} color={colour.hotColour} isBig={true}/>
                </Grid>
                <Grid item xl={12}>
                    <Button fullWidth variant="contained" onClick={() => dispatch({type: 'nextRound'})}
                            className={classes.button}>Nowa Runda</Button>
                </Grid>
                <Grid item xl={12}>
                    <Button fullWidth variant="contained" onClick={() => dispatch({type: 'reset'})}
                            className={classes.button}>Zeruj</Button>
                </Grid>
                <Grid item xl={12}>
                    <ModalRound text="Historia" dye={colour} stan={state.hist} dispatch={dispatch}/>
                </Grid>
                <Grid item xl={12}>
                    <ModalKart text="karta" dye={colour} stan={state} dispatch={dispatch}/>
                </Grid>
            </Grid>

        </div>
    )


}


export default App
