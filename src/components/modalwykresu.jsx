//zrobione
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

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
        height: '60%',
        backgroundColor: "#cec7b9",
        border: '2px solid #000',

        fontSize: 20,
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


export function ModalChart(prop) {
    const classes = useStyles(prop);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };


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
                    <LineChart
                        width={700}
                        height={600}
                        data={prop.stan}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="roundNumber"/>
                        <YAxis/>
                        <Tooltip />

                        <Line type="monotone" dataKey="mEuro" stroke={prop.dye.whiteColour} name="Megakredyty" />
                        <Line type="monotone" dataKey="wt" stroke={prop.dye.whiteColour} name="Współczynnik terraformacji" />
                        <Line type="monotone" dataKey="steel" stroke={prop.dye.steelColour} name=" Stal"/>
                        <Line type="monotone" dataKey="titan" stroke={prop.dye.titanBackground} name="Tytan"/>
                        <Line type="monotone" dataKey="bio" stroke={prop.dye.bioColour} name="Roślinność"/>
                        <Line type="monotone" dataKey="hot" stroke={prop.dye.hotBackground} name="Ciepło"/>
                        <Line type="monotone" dataKey="energy" stroke={prop.dye.energyBackground} name="Energia"/>
                    </LineChart>

                </div>
            </Modal>
        </div>
    );
}