import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav">
                <li className="nav-item">
                    <a className="navbar-brand" href="#">
                        Clicky Game
                    </a>
                </li>
                <li className="nav-item">
                    Message: {props.message}
                </li>
                <li className="nav-item">
                    Score: {props.winScore} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
