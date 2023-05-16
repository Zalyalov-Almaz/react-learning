import React from 'react';
import {IGreeting} from "./IGreeting";

const Greeting = (props: IGreeting) => {

    return (
        <div>
            <h3>Hi, {props.name}!</h3>
        </div>
    );
};

export default Greeting;