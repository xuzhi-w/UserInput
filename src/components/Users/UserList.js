import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
const UserList = (props) =>{
    console.log(props.users);
    const keyValue = Math.random();
    console.log(keyValue);
    return (
        <Card className={classes.users}>
            {/* <h1>{props.users[0]}</h1> */}
        <ul>
            {props.users.map((user)=>{
                return (<li key={Math.random()}>{user.name} ({user.age} years old)</li>);
            })}
        </ul>
        </Card>
    );
};


export default UserList;