import * as React from "react";

import NoMatch from "./noMatch";
import { getGuest } from "../framework/trello";
import {withRouter} from "react-router";
import Footer from "./footer";
import Steps from "./steps";
import { ReactComponent as LoadingImageUrl } from '../assets/hearts.svg';

export const LoadingContext = React.createContext({});

const App = ({ match }: any) => {
    let [guest, setGuest] = React.useState<GuestMetadata | null | 'not found'>(null);
    let [loading, setLoading] = React.useState<boolean>(true);
    let content = <Steps setLoading={setLoading} guest={guest}/>

    React.createContext(loading);

    React.useEffect(() => {
        getGuest(match.params.id, setLoading, setGuest);
    }, [match.params.id]);

    if (guest === 'not found') content = <NoMatch />;

    return (
        <LoadingContext.Provider value={setLoading}>
            {loading && <Loading />}
            {guest && content}
            <Footer />
        </LoadingContext.Provider>
    );
}

export const Loading = () => {
    return (
        <div className={"loading-container"}>
            <LoadingImageUrl />
        </div>);
}

export default withRouter(App);