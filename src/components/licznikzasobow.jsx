import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EcoIcon from '@material-ui/icons/Eco';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LanguageIcon from '@material-ui/icons/Language';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import BuildIcon from '@material-ui/icons/Build';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {ValueModal} from './modalustawwartosc'
import Box from '@material-ui/core/Box';
const defaultProps = {

  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};
const useStyles = makeStyles({
    root: {
        background: props => props.background,
        color: props => props.color,
        border: '2px solid #000',
        borderRadius: 3,
        borderWidth: 4,
        textAlign: 'center',

        textAlignLast: "center",
borderColor: props => props.colorBorder,
        fontSize: 24,

    },
    button: {
        background: 'radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 78%)',
        color: 'black',
       fontSize: 19,
        marginRight: 5,
        marginLeft: 5,
    },
    paper: {
        position: 'absolute',
        width: 4,
        backgroundColor: "#b4976f",
        border: '2px solid #000',

    },

})


export function ResourceCounter(props) {


    const classes = useStyles(props);


    return (

        <div className={classes.root}>


            <div> {props.text}</div>
                <ButtonGroup>
                    <IconButton variant="contained" aria-label="Add" className={classes.button}
                                onClick={() => props.dispatch({
                                    id: props.id,
                                    type: 'increment'
                                })}><AddIcon/></IconButton>

                    <ValueModal text={props.count} dispatch={props.dispatch} id={props.id}/>
                    <IconButton variant="contained" aria-label="Remove" className={classes.button} onClick={() => {
                        if (props.count > 0) {
                            props.dispatch({id: props.id, type: 'decrement'})
                        } else {
                            if (props.text === 'M€' && props.count > -5) {
                                props.dispatch({id: props.id, type: 'decrement'})
                            }

                        }
                    }}><RemoveIcon/>
                    </IconButton>
                    {props.isBig && <IconButton variant="contained" className={classes.button} onClick={() => {
                        if (props.count > 7) {
                            props.dispatch({id: props.id, type: 'maxDecrement'})
                        }

                    }}>-8</IconButton>}
                </ButtonGroup>



        </div>

    )


}




