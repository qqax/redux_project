import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    );
};

Counter.propTypes = {
    counter: PropTypes.number,
    inc: PropTypes.func,
    dec: PropTypes.func,
    rnd: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps, actions)(Counter);