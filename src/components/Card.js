import React from "react";

function Card(props) {
    return (
        <img 
            className="img-fluid img-thumbnail"
            alt={props.name}
            // to find images locally, must write path and `require` in `{}`
            src={require("../images/" + props.image)}
            style={style}
            // pass parameter to an event handler or callback?
            onClick={() => props.checkGuess(props.id)}
        />
    );
};

const style = {
    maxHeight: "200px",
    maxWidth: "200px"
};

export default Card;