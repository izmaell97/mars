import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {ValueModal} from './modalustawwartosc'

const useStyles = makeStyles({
    root: {
        background: props => `linear-gradient(54deg,   ${props.background} 85%,grey 100%)`,
        color: props => props.color,
        border: 0,
        borderRadius: 3,
        textAlign: 'center',
        marginLeft: 50,
        textAlignLast: "center",

        fontSize: 20,

    },
    button: {
        background: 'radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 78%)',
        color: 'black',
        fontSize: 40,
        marginRight: 10,
        marginLeft: 10,
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

                <h1>  {props.text}</h1>
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




