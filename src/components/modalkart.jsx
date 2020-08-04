import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
        fontSize: 40,
        marginRight: 10,
        marginLeft: 10,
    },

}));


export function ModalKart(prop) {
    const classes = useStyles(prop);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [statePrzycisk, setStatePrzycisk] = React.useState({
        Stal: false,
        Tytan: false,
    });
    const [czymozliwe, setStateczymozliwe] = React.useState(false) //
    const [iloscstali, setValueStali] = React.useState(0); //
    const [ilosctytanu, setValueTytanu] = React.useState(0);//
    const [zamowienie, setZamowienie] = React.useState(0); //
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setStateczymozliwe(false)
        setZamowienie(0)
        setValueTytanu(0)
        setValueStali(0)


    };
    const handleExecute = () => {
        let suma = zamowienie
        suma = suma - ((2 * iloscstali) + (3 * ilosctytanu))
        if (suma > prop.stan.megakredyty) {
            setStateczymozliwe(true)
        } else {
            if (suma > 0) {
                suma = prop.stan.megakredyty - suma
                prop.dispatch({id: "megakredyty", val: suma, type: 'set'})
                let stalnowa = prop.stan.stali - iloscstali
                let tytanowa = prop.stan.tytani - ilosctytanu
                prop.dispatch({id: "stali", val: stalnowa, type: 'set'})
                prop.dispatch({id: "tytani", val: tytanowa, type: 'set'})
                handleClose()
            } else {
                let stalnowa = prop.stan.stali - iloscstali
                let tytanowa = prop.stan.tytani - ilosctytanu
                prop.dispatch({id: "stali", val: stalnowa, type: 'set'})
                prop.dispatch({id: "tytani", val: tytanowa, type: 'set'})
                handleClose()
            }

        }

    }

    const handleChangePrzelacznik = (event) => {
        setStatePrzycisk({...statePrzycisk, [event.target.name]: event.target.checked});

    };

    const handleChangeTytan = (event, newValue) => {
        setValueTytanu(newValue);
    };
    const handleChangeStal = (event, newValue) => {
        setValueStali(newValue);
    };
    const handleChangezamowienie = (event) => {
        setZamowienie(parseInt(event.target.value))

    };
    let wartoscMaxStali = 0
    if (zamowienie - (ilosctytanu * 3) > prop.stan.stali) {
        wartoscMaxStali = prop.stan.stali
    } else {
        wartoscMaxStali = zamowienie - (ilosctytanu * 3)
    }
    if (wartoscMaxStali < 0) wartoscMaxStali = 0
    let wartoscMaxTytanu = 0
    if (zamowienie - (iloscstali * 2) > prop.stan.tytani) {
        wartoscMaxTytanu = prop.stan.tytani
    } else {
        wartoscMaxTytanu = zamowienie - (iloscstali * 2)
    }

    if (wartoscMaxTytanu < 0) wartoscMaxTytanu = 0
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
                                    control={<Checkbox checked={statePrzycisk.Stal} onChange={handleChangePrzelacznik}
                                                       name="Stal"/>}
                                    label="budynek"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={statePrzycisk.Tytan} onChange={handleChangePrzelacznik}
                                                       name="Tytan"/>}
                                    label="eksploracja kosmosu"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs>

                            <TextField type="numeric" id="zamowienie" label=" koszt:" defaultValue={zamowienie}
                                       onChange={handleChangezamowienie}
                                       error={czymozliwe}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>

                        <Grid item>
                            <BuildIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider disabled={statePrzycisk.Stal == false}
                                    value={iloscstali}
                                    onChange={handleChangeStal}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={wartoscMaxStali}

                            />
                        </Grid>
                        <Grid item>
                            <StarBorderIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider disabled={statePrzycisk.Tytan == false}
                                    value={ilosctytanu}
                                    onChange={handleChangeTytan}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={wartoscMaxTytanu}
                            />
                        </Grid>
                        <Button fullWidth onClick={handleExecute}>wykonaj</Button>
                    </Grid>

                </div>
            </Modal>
        </div>
    );
}