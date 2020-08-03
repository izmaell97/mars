import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontSize: 20,
        marginRight: 10,

    },
    button: {
        background: 'radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 78%)',
        color: 'black',
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
    },

}));


export function ModalWykresu(prop) {
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
                    style={{display:'flex',alignItems:'center',justifyContent:'center'}}

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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="numerrundy" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="meuro" stroke={prop.kolory.pkol}  />
        <Line type="monotone" dataKey="wt" stroke={prop.kolory.pkol}  />
        <Line type="monotone" dataKey="stal" stroke={prop.kolory.stlo}  />
        <Line type="monotone" dataKey="tytan" stroke={prop.kolory.ttlo}  />
        <Line type="monotone" dataKey="rosllinosc" stroke={prop.kolory.rtlo}  />
        <Line type="monotone" dataKey="cieplo" stroke={prop.kolory.ctlo}  />
        <Line type="monotone" dataKey="energia" stroke={prop.kolory.etlo}  />
      </LineChart>

                </div>
            </Modal>
        </div>
    );
}