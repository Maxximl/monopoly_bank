import React from "react";
import {HashRouter, Route} from "react-router-dom";
import {Join} from "./components/Join/Join";
import {Room} from "./components/Room/Room";
import "normalize.css";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <HashRouter>
            <div className={styles.container}>
                <Route path="/monopoly_bank" exact component={Join} />
                <Route path="/room" component={Room} />
            </div>
        </HashRouter>
    );
};
