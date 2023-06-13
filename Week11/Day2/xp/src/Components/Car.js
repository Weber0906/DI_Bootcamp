import React from "react";
import Garage from './Garage'


// Exersise 1 XP Part 1
// class Car extends React.Component {
//     render() {
//         return <h1>This car is {this.props.model}</h1>
//     }
// }

// Exercise 2 XP part 2 and 3
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        };
    }

    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Model: {this.props.model}</h2>
                <h3>This car is {this.state.color} {this.props.model}</h3>
                <Garage size='Small'/>    
            </div>
        )

    }
}

export default Car