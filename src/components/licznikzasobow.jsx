import ReactDOM from 'react-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import {Calyzasob} from "./calosc";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
        background:   props => `linear-gradient(54deg,   ${ props.background} 85%,grey 100%)`,
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

})

export function ResourceCounter(props) {



    const classes = useStyles(props);


    return (

        <div className={classes.root}>
            <p>
                <h1>  {props.text}</h1>
                <ButtonGroup>

                    <IconButton variant="contained" aria-label="Add" className={classes.button} onClick={ () => props.dispatch( {id: props.id ,type: 'increment'})}><AddIcon /></IconButton>
                    <Button variant="contained" className={classes.button}> {props.count} </Button>
                    <Button variant="contained" className={classes.button} onClick={() => {
                        if (props.count > 0) {
                         props.dispatch( {id: props.id ,type: 'decrement'})
                        }
                        else {
                            if(props.text=='M€'&& props.count>-5){
                                  props.dispatch( {id: props.id ,type: 'decrement'})
                            }
                        }
                    }}>-
                    </Button>
                    {props.czytoilosc&&<Button variant="contained" className={classes.button} onClick={() => {
                        if (props.count > 7) {
                           props.dispatch( {id: props.id ,type: 'maxdecrement'})
                        }

                    }}>-8</Button>}
                     </ButtonGroup>
            </p>


        </div>
    )


}




