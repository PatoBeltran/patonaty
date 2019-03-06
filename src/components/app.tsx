import * as React from "react";
import { useTranslation } from 'react-i18next';
import NoMatch from "./noMatch";
import { Loading } from "./loading";
import { Location } from "./location";
import { getGuest, going, notGoing } from "../cards/actions";
import {withRouter} from "react-router";
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
        guest = getGuest(match.params.id);
        if (guest) {
            setGuest({name: guest.name});
            setLoading(false);
        }
    });

    if (loading) return <Loading />;
    if (!guest) return <NoMatch />;

    return (
        <>
            <div className="invitation-title">You are invited to our wedding!</div>
            <div className="where">Optimism brewery</div>
            <Location />
            <div className="when">4/20</div>
            <div>We have separated a seat for you, {guest.name}, and would love to have you in our wedding.</div>
            <div>{guest.name}</div>
            <button onClick={() => handleGoing()}>Going</button>
            <button onClick={() => handleNotGoing()}>Not going</button>
        </>
    );
}

export default withRouter(App);