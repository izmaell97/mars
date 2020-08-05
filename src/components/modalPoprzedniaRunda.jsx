//zrobione
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
import {ModalChart} from "./modalwykresu";

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
    whiteStyle:{
         backgroundColor: prop => prop.dye.whiteBackground,
        color: 'black'


    },
    steelStyle:{
         backgroundColor: prop => prop.dye.steelBackground,
        color: prop => prop.dye.steelColour,
    },
    titanStyle:{
        backgroundColor: prop => prop.dye.titanBackground,
        color: prop => prop.dye.titanColour,
    },
    bioStyle:{
       backgroundColor: prop => prop.dye.bioBackground,
        color: prop => prop.dye.bioColour,
    },
    energyStyle:{
      backgroundColor: prop => prop.dye.energyBackground,
        color: prop => prop.dye.energyColour,
    },
    hotStyle:{
      backgroundColor: prop => prop.dye.hotBackground,
        color: prop => prop.dye.hotColour,
    },
}));


export function ModalRound(prop) {
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
                 <TableCell align="center" className={classes.whiteStyle}>{element.mEuro}</TableCell>
                <TableCell align="center" className={classes.whiteStyle}>{element.wt}</TableCell>


                <TableCell align="center" className={classes.steelStyle}>{element.steel}</TableCell>
                <TableCell align="center" className={classes.titanStyle}>{element.titan}</TableCell>

                <TableCell align="center" className={classes.bioStyle}>{element.bio}</TableCell>
                <TableCell align="center" className={classes.energyStyle}>{element.energy}</TableCell>
                <TableCell align="center" className={classes.hotStyle}>{element.hot}</TableCell>
             <TableCell align="center" className={classes.button}><Button onClick={() =>{

                 prop.dispatch({type: 'return', turn: (element.roundNumber-1)})
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

            < TableCell className={classes.whiteStyle} align="center"><EuroSymbolIcon/></TableCell>
              <TableCell className={classes.whiteStyle} align="center"><LanguageIcon/></TableCell>
               <TableCell className={classes.steelStyle} align="center"><BuildIcon/></TableCell>
            <TableCell className={classes.titanStyle} align="center"><StarBorderIcon/></TableCell>

            <TableCell align="center" className={classes.bioStyle}><EcoIcon/></TableCell>
            <TableCell align="center" className={classes.energyStyle}><FlashOnIcon/></TableCell>
               <TableCell align="center" className={classes.hotStyle}><FlashOnIcon/><FlashOnIcon/><FlashOnIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {body}
        </TableBody>
      </Table>
    </TableContainer>
<ModalChart text="pokaż wykres" stan={prop.stan} dye={prop.dye}/>
                </div>
            </Modal>
        </div>
    );
}