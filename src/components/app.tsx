import * as React from "react";
import { useTranslation } from 'react-i18next';
import NoMatch from "./noMatch";
import { Loading } from "./loading";
import { getGuest } from "../framework/trello";
import {withRouter} from "react-router";
import Footer from "./footer";
import Steps from "./steps";

interface GuestInfo {
    name: string,
    plusOne?: GuestInfo
}

const App = ({ match }: any) => {
    const { t } = useTranslation();
    let [guest, setGuest] = React.useState<GuestInfo | null>(null);
    let [loading, setLoading] = React.useState<boolean>(true);
    let content = <Steps setLoading={setLoading} guest={guest}/>

    React.useEffect(() => {
        const currentGuest = getGuest(match.params.id);
        
        if (currentGuest) {
            setGuest(currentGuest);
            setLoading(false);
        }
    }, [match.params.id]);

    if (loading) content = <Loading />;
    if (!guest) content = <NoMatch />;

    return (
        <>
            {content}
            <Footer />
        </>
    );
}

export default withRouter(App);