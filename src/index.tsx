import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/app';
import "./style/main.scss"

// Import i18n so its bundled by webpack
import './i18n';

//TODO: change suspense fallback to a loading indicator
const MainComponent = ({}) => (
    <React.Suspense fallback={<></>}>
        <App />
    </React.Suspense>);

ReactDOM.render(
    <MainComponent />,
    document.getElementById("app-container")
);
