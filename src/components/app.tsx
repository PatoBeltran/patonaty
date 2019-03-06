import * as React from "react";
import { useTranslation } from 'react-i18next';
import NoMatch from "./noMatch";
import { Loading } from "./loading";
import { Location } from "./location";
import { getGuest, going, notGoing } from "../framework/trello";
import {withRouter} from "react-router";
import Invitation from "./invitation";
import Footer from "./footer";
interface GuestInfo {
    name: string,
    plusOne?: GuestInfo
}

const App = ({ match }: any) => {
    const { t } = useTranslation();
    let [guest, setGuest] = React.useState<GuestInfo | null>(null);
    let [loading, setLoading] = React.useState<boolean>(true);
    const handleGoing = () => {
        going(match.params.id, setLoading)
    }
    const handleNotGoing = () => {
        notGoing(match.params.id, setLoading)
    }

    React.useEffect(() => {
        const currentGuest = getGuest(match.params.id);
        
        if (currentGuest) {
            setGuest(currentGuest);
            setLoading(false);
        }
    }, [match.params.id]);

    if (loading) return <Loading />;
    if (!guest) return <NoMatch />;

    console.log(guest);
    return (
        <>
            <Invitation guestName={guest.name.split(" ")[0]} pronoun="she"/>
            <Footer />
        </>
    );
}

export default withRouter(App);