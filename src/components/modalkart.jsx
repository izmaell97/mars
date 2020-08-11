import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import BuildIcon from '@material-ui/icons/Build';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import FormGroup from '@material-ui/core/FormGroup';

import Checkbox from '@material-ui/core/Checkbox';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'center',
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontSize: 30,
        marginRight: 10,

    },
    button: {
        background: 'radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 78%)',
        color: 'black',
       fontSize: 18,
        marginRight: 5,
        marginLeft: 5,
    },

}));


export function ModalKart(prop) {
    const classes = useStyles(prop);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [stateSwitch, setStateSwitch] = React.useState({
        isSteel: false,
        isTitan: false,
    });
    const [isPossible, setIsPossible] = React.useState(false) //
    const [steelNumber, setSteelNumber] = React.useState(0); //
    const [titanNumber, setTitanNumber] = React.useState(0);//
    const [order, setOrder] = React.useState(0); //
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsPossible(false)
        setOrder(0)
        setTitanNumber(0)
        setTitanNumber(0)


    };
    const handleExecute = () => {
        let amount = order
        amount = amount - ((2 * steelNumber) + (3 * titanNumber))
        if (amount > prop.stan.megaCredits) {
            setIsPossible(true)
        } else {
            if (amount > 0) {
                amount = prop.stan.megaCredits - amount
                prop.dispatch({id: "megaCredits", val: amount, type: 'set'})
                let newSteel = prop.stan.steelNumber - steelNumber
                let newTitan = prop.stan.titanNumber - titanNumber
                prop.dispatch({id: "titanNumber", val: newTitan, type: 'set'})
                prop.dispatch({id: "steelNumber", val: newSteel, type: 'set'})
                handleClose()
            } else {
                 let newSteel = prop.stan.steelNumber - steelNumber
                let newTitan = prop.stan.titanNumber - titanNumber
                prop.dispatch({id: "titanNumber", val: newTitan, type: 'set'})
                prop.dispatch({id: "steelNumber", val: newSteel, type: 'set'})
                handleClose()
            }

        }

    }

    const handleChangeSwitch = (event) => {
        setStateSwitch({...stateSwitch, [event.target.name]: event.target.checked});

    };

    const handleChangeTitan = (event, newValue) => {
        setTitanNumber(newValue);
    };
    const handleChangeSteel = (event, newValue) => {
        setSteelNumber(newValue);
    };
    const handleChangeOrder = (event) => {
        setOrder(parseInt(event.target.value))

    };
    let maxSteelValue = 0
    if (order - (titanNumber * 3) > prop.stan.steelNumber) {
        maxSteelValue = prop.stan.steelNumber
    } else {
        maxSteelValue = (order - (titanNumber * 3)) / 2
    }
    if (maxSteelValue < 0) maxSteelValue = 0
    let maxTitanValue = 0
    if (order - (steelNumber * 2) > prop.stan.titanNumber) {
        maxTitanValue = prop.stan.titanNumber
    } else {
        maxTitanValue = (order - (steelNumber * 2)) / 3
    }

    if (maxTitanValue < 0) maxTitanValue = 0
    return (
        <div>
            <Button variant="contained" className={classes.button} onClick={handleOpen}>
                {prop.text}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <div className={classes.paper}>
                    <Grid container>
                        <Grid item xs>

                            <FormGroup column>
                                <FormControlLabel
                                    control={<Checkbox checked={stateSwitch.isSteel} onChange={handleChangeSwitch} name="isSteel"
                                                       />}
                                    label="budynek"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={stateSwitch.isTitan} onChange={handleChangeSwitch} name="isTitan"
                                                      />}
                                    label="eksploracja kosmosu"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs>

                            <TextField type="numeric"  label=" koszt:" defaultValue={order}
                                       onChange={handleChangeOrder}
                                       error={isPossible}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>

                        <Grid item>
                            <BuildIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider disabled={stateSwitch.isSteel === false}
                                    value={steelNumber}
                                    onChange={handleChangeSteel}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={maxSteelValue}

                            />
                        </Grid>
                        <Grid item>
                            <StarBorderIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider disabled={stateSwitch.isTitan === false}
                                    value={titanNumber}
                                    onChange={handleChangeTitan}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={maxTitanValue}
                            />
                        </Grid>
                        <Button fullWidth onClick={handleExecute}>wykonaj</Button>
                    </Grid>

                </div>
            </Modal>
        </div>
    );
}