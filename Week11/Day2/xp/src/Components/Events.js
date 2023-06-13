import React from 'react';

// Exercise 2 Part 1 and 2
// class Events extends React.Component {
//     clickMe = () => {
//         alert("I was clicked");
//     };

//     handleKeyDown = (event) => {
//         if (event.key === "Enter") {
//             alert("The  Enter key was pressed, your input is:" + event.target.value);
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.clickMe}>Click Me</button> <br></br>
//                 <input type="text" placeholder='Press the ENTER key!' onKeyDown={this.handleKeyDown} />
//             </div>
//         );
//     }
// }

// Exercise 2 Part 3
class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    render() {
        return (
            <div className='Ex9'>
                <h3>Exercise9</h3>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
                </button>
            </div>
        )
    }
}

export default Events;