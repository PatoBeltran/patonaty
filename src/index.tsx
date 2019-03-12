import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import App from './components/app';
import NoMatch from './components/noMatch';
import Footer from './components/footer';
import {Loading} from './components/app';

import * as serviceWorker from './serviceWorker';

import "./style/main.scss"
import './i18n';

//TODO: change suspense fallback to a loading indicator
const MainComponent = () => (
    <React.Suspense fallback={<Loading />}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Router>
            <Switch>
                <Route exact path="/:id" render={() => <App />} />
                <Route render={() => <><NoMatch /><Footer /></>} />
            </Switch>
        </Router>
    </React.Suspense>);

ReactDOM.render(<MainComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
