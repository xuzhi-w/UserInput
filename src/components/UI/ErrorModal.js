import React from "react";
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
const ErrorModal = (props) =>{
    const buttonClickHandler = ()=>{
        props.show(false);
    }
    return (
        <div className={classes.backdrop}>
        <Card className={classes.modal}>
            <header className={classes.header}><h2>{props.title}</h2></header>
            <div className={classes.content}><p>{props.message}</p></div>
            <footer className={classes.actions}>
                <Button onClick={buttonClickHandler}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModal;