import React from "react";
import ReactDOM from "react-dom";
import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from "./actions";
import Counter from "./counter";

const store = createStore(reducer); //создание store, внутри - логика
const {dispatch} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);
document.getElementById("rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10) * (Math.random() > 0.5 ? 1 : -1);
    rnd(value);
});

const update = () => {
    document.getElementById("counter").textContent = store.getState().toString();
};

store.subscribe(update);