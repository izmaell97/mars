import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import EcoIcon from '@material-ui/icons/Eco';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LanguageIcon from '@material-ui/icons/Language';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import BuildIcon from '@material-ui/icons/Build';
import {ModalWykresu} from "./modalwykresu";

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
    biale:{
         backgroundColor: prop => prop.kolory.ptlo,
        color: 'black'


    },
    stalowy:{
         backgroundColor: prop => prop.kolory.stlo,
        color: prop => prop.kolory.skol,
    },
    tytanowy:{
        backgroundColor: prop => prop.kolory.ttlo,
        color: prop => prop.kolory.tkol,
    },
    roslinny:{
       backgroundColor: prop => prop.kolory.rtlo,
        color: prop => prop.kolory.rkol,
    },
    energiczny:{
      backgroundColor: prop => prop.kolory.etlo,
        color: prop => prop.kolory.ekol,
    },
    cieply:{
      backgroundColor: prop => prop.kolory.ctlo,
        color: prop => prop.kolory.ckol,
    },
}));


export function Mnodalrundy(prop) {
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

    let body = prop.stan.map(element => {
            return <TableRow>
                 <TableCell align="center" className={classes.biale}>{element.meuro}</TableCell>
                <TableCell align="center" className={classes.biale}>{element.wt}</TableCell>


                <TableCell align="center"className={classes.stalowy}>{element.stal}</TableCell>
                <TableCell align="center" className={classes.tytanowy}>{element.tytan}</TableCell>

                <TableCell align="center" className={classes.roslinny}>{element.roslinnosc}</TableCell>
                <TableCell align="center" className={classes.energiczny}>{element.energia}</TableCell>
                <TableCell align="center" className={classes.cieply}>{element.cieplo}</TableCell>
             <TableCell align="center" className={classes.button}><Button onClick={() =>{

                 prop.dispatch({type: 'return', runda: element.numerrundy})
             }
             } > WRÓĆ</Button></TableCell>

            </TableRow>

        }
    )


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
                    <TableContainer >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            < TableCell className={classes.biale} align="center"><EuroSymbolIcon/></TableCell>
              <TableCell className={classes.biale} align="center"><LanguageIcon/></TableCell>
               <TableCell className={classes.stalowy} align="center"><BuildIcon/></TableCell>
            <TableCell className={classes.tytanowy} align="center"><StarBorderIcon/></TableCell>

            <TableCell align="center" className={classes.roslinny}><EcoIcon/></TableCell>
            <TableCell align="center" className={classes.energiczny}><FlashOnIcon/></TableCell>
               <TableCell align="center" className={classes.cieply}><FlashOnIcon/><FlashOnIcon/><FlashOnIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {body}
        </TableBody>
      </Table>
    </TableContainer>
<ModalWykresu text="pokaż wykres" stan={prop.stan} kolory={prop.kolory}/>
                </div>
            </Modal>
        </div>
    );
}