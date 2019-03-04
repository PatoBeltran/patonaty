import * as React from "react";
import { useTranslation } from 'react-i18next';
import NoMatch from "./noMatch";
import { Loading } from "./loading";

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
        <div>{guest.name}</div>
    );
}

export default App;