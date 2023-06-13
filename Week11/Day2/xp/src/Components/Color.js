import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "red",
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favouriteColor: "yellow"});
        }, 5000)
    }

    changeColor = () => {
        this.setState({favouriteColor: "blue"});
    };

    render() {
        return (
            <div>
                <h1>Favourite Color: {this.state.favouriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

export default Color;