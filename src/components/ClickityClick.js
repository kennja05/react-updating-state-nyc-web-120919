// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {

    // constructor() {
    //     // super();
        state = {
            hasBeenClicked: false
        }

    handleClick = () => {   
        let trueFalse = !this.state.hasBeenClicked
        this.setState({
            hasBeenClicked: trueFalse
        })
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }

}