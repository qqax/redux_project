import React from "react";

const Counter = () => {
    return (
        <div className="jumbotron">
            <h1>0</h1>
            <button className="btn btn-primary">DEC</button>
            <button className="btn btn-primary">INC</button>
            <button className="btn btn-primary">RND</button>
        </div>
    );
};

export default Counter;