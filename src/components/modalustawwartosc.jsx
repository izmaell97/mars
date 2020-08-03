import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
    button: {
        background: 'radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 78%)',
        color: 'black',
        fontSize: 40,
        marginRight: 10,
        marginLeft: 10,
    },
}));

export  function SimpleModal(prop) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1 id="simple-modal-title">
           <TextField type="numeric" id="standard-basic" label="Standard" defaultValue={prop.text}  />

          <Button onClick={ ()=> prop.dispatch( {id: prop.id, val: document.getElementById("standard-basic").value ,type: 'set'})}>wykonaj!</Button>
      </h1>
      <p id="simple-modal-description">

      </p>

    </div>
  );

  return (
    <div>
     <Button variant="contained" className={classes.button}  onClick={handleOpen}>
         {prop.text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}