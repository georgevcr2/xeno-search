import React from 'react';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                type={props.elementType}
                value={props.placeholder}
                {...props.elementConfig} 
                onChange={props.changed} />
            break;
        case (''):
            break;
        default:
            inputElement = null;
    }

    return inputElement;
};

export default Input;