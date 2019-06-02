import React from "react";

function Card(props) {
    return (
        <img 
            className="card-img"
            alt={props.name}
            src={props.image}
        />
    );
}

export default Card;