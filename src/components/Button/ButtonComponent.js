import React from 'react';
import './ButtonComponent.scss';

const ButtonComponent = (props) => {
    
    const {label, onClick, isDisabled} = props;

    return (
    <button 
        className="button-component"
        onClick={(e) => onClick(e)}
        disabled={isDisabled}
    >
        {label}
    </button>
    );
}

export default ButtonComponent;
