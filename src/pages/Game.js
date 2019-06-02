import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";

import images from "../images/images.json"

export class Game extends Component {
    state = {
        winScore: 0,
        topScore: 0,
        message: "Click an image to begin",
    };




    render() {
        return (
            <div>
                <Navbar 
                    winScore={this.state.winScore} 
                    topScore={this.state.topScore}
                    message={this.state.message}
                />
                <Jumbotron />

                <Container>
                    <Row>
                        <Card 
                        />
                    </Row>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default Game;