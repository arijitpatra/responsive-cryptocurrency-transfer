import React from 'react';
import './ExchangesComponent.scss';

const ExchangesComponent = (props) => {   
    const {type, imageURL, name} = props;

    return (
    <div className="exchanges-component">
        <div className="type">{type}</div>
        <section>
            <div className="adjust"></div>
            <img src={imageURL}/>
            {name}
        </section>
    </div>
    );
}

export default ExchangesComponent;
