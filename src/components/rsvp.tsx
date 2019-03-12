import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Dropdown} from "./design/dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { going, notGoing } from "../framework/trello"
import { LoadingContext } from "./app";
import { RSVPSent } from "./rsvpSent";
import i18n from "../i18n";

interface IRSVP {
    key: "going" | "notGoing" | "coupleGoing",
    value: string
}

export const listToStatus = (guest: GuestMetadata, t: i18n.TFunction): "going" | "notGoing" | "coupleGoing" | undefined => {
    if (guest.status === 'attending') {
        if (guest.plusOne && guest.plusOne.status === 'attending') {
            return t('rsvpCoupleOptions.0', { returnObjects: true });
        }

        if (guest.plusOne) {
            return t('rsvpCoupleOptions.1', { returnObjects: true });
        }

        return t('rsvpOptions.0', { returnObjects: true });
    }
    
    if (guest.status === 'declined') {
        if (guest.plusOne) {
            return t('rsvpCoupleOptions.2', { returnObjects: true });
        }

        return t('rsvpOptions.1', { returnObjects: true });
    }
}

const RSVP = ({ guest, status }: any) => {
    const { t } = useTranslation();
    let optionsKey = "rsvpOptions"
    let noRsvpDescription = t("rsvpDescription")

    if (guest.plusOne) {
        optionsKey = "rsvpCoupleOptions"
        noRsvpDescription = t("rsvpCoupleDescription", {partnerName: guest.plusOne.name.split(" ")[0]})
    }

    const options = t(optionsKey, {returnObjects: true}) as IRSVP[]

    let [rsvp, setRSVP] = React.useState<IRSVP>(status || options[0])
    let [sent, setSent] = React.useState<IRSVP>(status)
    const setLoading = React.useContext(LoadingContext) as any;

    const submit = () => {
        switch(rsvp.key) {
            case "going":
                going(guest, setLoading)
                .then(() => {
                    guest.plusOne && notGoing(guest.plusOne, setLoading)
                });
                break;
            case "notGoing":
                notGoing(guest, setLoading)
                .then(() => {
                    guest.plusOne && notGoing(guest.plusOne, setLoading)
                })
                break;
            case "coupleGoing":
                going(guest, setLoading)
                .then(() => {
                    guest.plusOne && going(guest.plusOne, setLoading)
                })
                break;
        }
        setSent(rsvp)
    }

    return (
        <div className='step-container'>
            <div><GoldText>Répondez s'il vous plaît</GoldText></div>
            <div>
                {sent && <RSVPSent guest={guest} statusKey={sent.key} />}
                {!sent && noRsvpDescription}
            </div>
            <Dropdown
                options={options}
                selected={rsvp}
                select={setRSVP} />
            <button onClick={() => submit()}>
                { !sent ? t('rsvpButton') : t('rsvpButtonChange')} <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
}


export default RSVP;