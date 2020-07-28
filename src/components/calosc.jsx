import ReactDOM from 'react-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles({
    root: {
        background: props => `linear-gradient(54deg, ${ props.background} 70%, black 0%`,

        color: props => props.color,
        border: 0,
        borderRadius: 3,
        textAlign: 'center',
        marginLeft: 50,
        textAlignLast: "center",

        fontSize: 20,

    },
    button: {
        background: ' radial-gradient(circle, rgba(176,176,176,1) 45%, rgba(145,144,143,1) 65%)',
        color: 'black',
        fontSize: 40,
        marginRight: 10,
        marginLeft: 10,
    }
})


const stylbuton = makeStyles({})

export function Calyzasob(props) {
    const [count, setCount] = useState(0);


    const classes = useStyles(props);


    return (

        <div className={classes.root}>
            {false && <div></div>

            }

            <h1>  {props.text}</h1>

            <ButtonGroup>
                <Button variant="contained" className={classes.button} onClick={() => setCount(count + 1)}>+</Button>
                <Button variant="contained" className={classes.button}> {count} </Button>
                <Button variant="contained" className={classes.button} onClick={() => {
                    if (count > 0) {
                        setCount(count - 1)
                    }
                }}>-
                </Button>

                <Button variant="contained" className={classes.button} onClick={() => {
                    if (count > 8) {
                        setCount(count - 8)
                    }
                }}>-8
                </Button>
            </ButtonGroup>
        </div>
    )


}


const styl = {
    color: '#8b9092'
}


