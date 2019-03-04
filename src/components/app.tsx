import * as React from "react";
import { useTranslation } from 'react-i18next';
import NoMatch from "./noMatch";
import { Loading } from "./loading";
import { Location } from "./location";

interface GuestInfo {
    name: string,
    plusOne?: GuestInfo
}

const App = ({ match }: any) => {
    const { t } = useTranslation();
    let [guest, setGuest] = React.useState<GuestInfo | null>(null);
    let [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        // Call API
        // match.params.id
        setLoading(false);
        setGuest({ name: "Arturo Mendirichaga" });
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
        </>
    );
}

export default App;