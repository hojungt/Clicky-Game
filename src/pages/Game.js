import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";

import images from "../images/images.json"

export class Game extends Component {
    // define state
    state = {
        images: images,
        imagesUnguessed: images,
        winScore: 0,
        topScore: 0,
        message: "Click an image to begin.",
    };  

    // shuffle by array.sort
    shuffleArray = (array) => {
        array.sort(() => Math.random() - 0.5);
    };
    // `sort()` sorts the elements of an array in place and returns the sorted array
    // The default sort order is built upon converting the elements into strings, 
    // then comparing their sequences of UTF-16 code units values.


    // change to this state if the image hasn't been guessed
    setStateGuessRight = (imagesNew) => {
        this.setState({
            images: images,
            imagesUnguessed: imagesNew,    
            winScore: this.state.winScore +1,
            message: "Your guess is right!"
        })
    };

    // change to this state if the image has already been guessed
    setStateGuessWrong = () => {
        this.setState({
            images: images,
            imagesUnguessed: images,    
            topScore: this.state.winScore > this.state.topScore ? this.state.winScore : this.state.topScore,
            winScore: 0,
            message: "Game over! Your guess is wrong."
        })
    };

    // check if the image has been guessed, compared to original images.json
    checkGuess = (id) => {

        // find an id change from onClick event within the unguessed images array
        const isGuessed = this.state.imagesUnguessed.find( image => image.id === id );
        // console.log("image", isGuessed);

        // if the image has `undefined` in its onClick property,
        // then the image has been clicked and thus lose the game.
        if (isGuessed === undefined) {
            this.setStateGuessWrong();
        }

        else {
            const imagesNew = this.state.imagesUnguessed.filter( image => image.id !== id)
            this.setStateGuessRight(imagesNew);
        }

        this.shuffleArray(images);
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
                        {this.state.images.map(image => (
                            <Card 
                                id={image.id}
                                key={image.id}
                                name={image.name}
                                image={image.image}
                                checkGuess={this.checkGuess}
                            />
                        ))}
                    </Row>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default Game;