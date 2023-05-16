import React from 'react';
import style from './style.module.css';
import Greeting from "./Greeting";

const Login = () => {

    return (
        <div className={style.heading}>
            <h1>Login page</h1>
            <Greeting name={'Almaz'}/>
        </div>
    );
};

export default Login;