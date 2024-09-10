import React ,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = props => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [showModal,setShowModal] = useState(false);
    const [error,setError] = useState();
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || 
            enteredAge.trim().length === 0
    ){
            setShowModal((show)=> true);
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age(non-empty values)"
            })
            return ;
        }
        if(+enteredAge < 1){
            setShowModal((show)=> true);
            setError({
                title: 'Invalid age',
                message: "Please enter a valid age(>0)."
            })
            return ;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };
    

    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
        console.log(enteredUsername);
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    return (
        <>
        { showModal && <ErrorModal title={error.title} message={error.message} show={setShowModal}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler} >
                <label htmlFor="username">Username</label>
                <input id="username" type ="text" onChange={usernameChangeHandler} 
                    value={enteredUsername}
                ></input>

                <label htmlFor="age">Age(Years)</label>
                <input id="age" type ="number" onChange={ageChangeHandler}
                value={enteredAge}
                ></input>
                <Button type='submit'>
                    Add User
                </Button>
            </form>
        </Card>
        </>
    );
}


export default AddUser;