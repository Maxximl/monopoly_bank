import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Join} from "./components/Join/Join";
import {Room} from "./components/Room/Room";
import "normalize.css";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <Router>
            <div className={styles.container}>
                <Route path="/monopoly_bank" exact component={Join} />
                <Route path="monopoly_bank/room" component={Room} />
            </div>
        </Router>
    );
};
