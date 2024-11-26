//zrobione
import React from 'react';
//import {makeStyles} from '@material-ui/core/styles';
//import Modal from '@material-ui/core/Modal';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Dialog from '@mui/material/Dialog';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

import FlashOnIcon from '@mui/icons-material/FlashOn';
import LanguageIcon from '@mui/icons-material/Language';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import BuildIcon from '@mui/icons-material/Build';
import {ModalChart} from "./modalwykresu";
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@mui/material/IconButton';
//import Typography from '@material-ui/core/Typography';
import CloseIcon from '@mui/icons-material/Close';


    // getModalStyle is not a pure function, we roll the style only on the first render
    //const [modalStyle] = React.useState(getModalStyle);
    export function ModalRound(prop){ 
      const classes={
        paper: {
          width: '100hv',
          backgroundColor:  prop.dye.whiteBackground,
          border: '2px solid #000',
          boxShadow: 5,
          padding: 2,
      },
        button: {
            background: 'radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 78%)',
            color: 'black',
            fontSize: 18,
            marginRight: 5,
            marginLeft: 5,
        },
        whiteStyle:{
             backgroundColor:  prop.dye.whiteBackground,
            color: 'black'
    
    
        },
        steelStyle:{
             backgroundColor:  prop.dye.steelBackground,
            color: prop.dye.steelColour,
        },
        titanStyle:{
            backgroundColor:  prop.dye.titanBackground,
            color:  prop.dye.titanColour,
        },
        bioStyle:{
           backgroundColor:  prop.dye.bioBackground,
            color:  prop.dye.bioColour,
        },
        energyStyle:{
          backgroundColor: prop.dye.energyBackground,
            color:  prop.dye.energyColour,
        },
        hotStyle:{
          backgroundColor:  prop.dye.hotBackground,
            color:  prop.dye.hotColour,
        },
    }
    const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
    setOpen(true);
  };
    const handleClose = () => {
        setOpen(false);

    };

    let body = prop.stan.map(element => {
            return (<TableRow>
                 <TableCell align="center" sx={classes.whiteStyle}>{element.mEuro}</TableCell>
                <TableCell align="center" sx={classes.whiteStyle}>{element.wt}</TableCell>


                <TableCell align="center" sx={classes.steelStyle}>{element.steel}</TableCell>
                <TableCell align="center" sx={classes.titanStyle}>{element.titan}</TableCell>

                <TableCell align="center" sx={classes.bioStyle}>{element.bio}</TableCell>
                <TableCell align="center" sx={classes.energyStyle}>{element.energy}</TableCell>
                <TableCell align="center" sx={classes.hotStyle}>{element.hot}</TableCell>
             <TableCell align="center" sx={classes.button}><Button onClick={() =>{

                 prop.dispatch({type: 'return', turn: (element.roundNumber-1)})
                 handleClose()
             }
             } > WRÓĆ</Button></TableCell>

            </TableRow>
            )

        }
    )


    return (
        <div>
            <Button variant="contained" sx={classes.button} onClick={handleClickOpen}>
                {prop.text}
            </Button>
          <Dialog  open={open} onClose={handleClose} >


                <div style={classes.paper}>
                    <TableContainer >
      <Table sx={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            < TableCell sx={classes.whiteStyle} align="center"><EuroSymbolIcon/></TableCell>
              <TableCell sx={classes.whiteStyle} align="center"><LanguageIcon/></TableCell>
               <TableCell sx={classes.steelStyle} align="center"><BuildIcon/></TableCell>
            <TableCell sx={classes.titanStyle} align="center"><StarBorderIcon/></TableCell>

            <TableCell align="center" sx={classes.bioStyle}><EnergySavingsLeafIcon/></TableCell>
            <TableCell align="center" sx={classes.energyStyle}><FlashOnIcon/></TableCell>
               <TableCell align="center" sx={classes.hotStyle}><FlashOnIcon/><FlashOnIcon/><FlashOnIcon/></TableCell>
              <TableCell align="center" ><IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {body}
        </TableBody>
      </Table>
    </TableContainer>
<ModalChart text="pokaż wykres" stan={prop.stan} dye={prop.dye}/>
                </div>
          </Dialog>
        </div>
    );
}