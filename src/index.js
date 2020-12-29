import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from './components/IndexPage';
import TriangularGrid from './components/Grids/TriangularGrid';
import CipherPage from './components/Cipher/CipherPage';

import * as serviceWorker from './serviceWorker';
import './index.css';


const App = () =>
    <React.StrictMode>
        <header>
            <h1>Maths Resources</h1>
        </header>

        <main>
            <Router>
                <Switch>
                    <Route path="/triangular-grids" component={TriangularGrid} />
                    <Route path="/cipher" component={CipherPage} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </Router>
        </main>
    </React.StrictMode>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
