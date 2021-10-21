import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import {Join} from "./components/Join/Join";
import {Room} from "./components/Room/Room";
import "normalize.css";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <Router basename="/monopoly_bank">
            <div className={styles.container}>
                <Route path="/" exact component={Join} />
                <Route path="/room" component={Room} />
            </div>
        </Router>
    );
};
