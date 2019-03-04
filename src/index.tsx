import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch} from "react-router-dom";

const App = React.lazy(() => import('./components/app'));
const NoMatch = React.lazy(() => import('./components/noMatch'));

import "./style/main.scss"

// Import i18n so its bundled by webpack
import './i18n';

//TODO: change suspense fallback to a loading indicator
const MainComponent = () => (
    <React.Suspense fallback={<></>}>
        <Router>
            <Switch>
                <Route exact path="/:id" render={ () => <App />} />
                <Route render={() => <NoMatch />} />
            </Switch>
        </Router>
    </React.Suspense>);

ReactDOM.render(
    <MainComponent />,
    document.getElementById("app-container")
);
