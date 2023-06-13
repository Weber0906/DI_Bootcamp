import React from "react";

class Language extends React.Component {
    render() {
        const { name, votes, increaseVote } = this.props;

        return (
            <div className="Language">
                <h2>{name}</h2>
                <p>Votes: {votes}</p>
                <button onClick={(event) => increaseVote(this.props.index)}>Vote</button>
            </div>
        );
    }
}

export default Language;