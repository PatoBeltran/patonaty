import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Dropdown} from "./design/dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { going, notGoing } from "../framework/trello"
import {Loading} from "./loading";


interface IRSVP {
    key: "going" | "notGoing" | "coupleGoing",
    value: string
}


const RSVP = ({guest, status}: any) => {
    const { t } = useTranslation();
    let optionsKey = "rsvpOptions"
    let description = t("rsvpDescription")

    if (guest.plusOne) {
        optionsKey = "rsvpCoupleOptions"
        description = t("rsvpCoupleDescription", {partnerName: guest.plusOne.name.split(" ")[0]})
    }

    const options = t(optionsKey, {returnObjects: true}) as IRSVP[]

    let [rsvp, setRSVP] = React.useState<IRSVP>(status ? status : options[0])
    let [loading, setLoading] = React.useState<boolean>(false);

    const submit = () => {
        switch(rsvp.key) {
            case "going":
                going(guest.id, setLoading)
                guest.plusOne && notGoing(guest.plusOne.id, setLoading)
            case "notGoing":
                notGoing(guest.id, setLoading)
                guest.plusOne && notGoing(guest.plusOne.id, setLoading)
            case "coupleGoing":
                going(guest.id, setLoading)
                guest.plusOne && going(guest.plusOne.id, setLoading)
        }
    }

    if (loading) return <Loading />;

    return (
        <div className='step-container'>
            <div><GoldText>Répondez s'il vous plaît</GoldText></div>
            <div>{description}</div>
            <Dropdown
                options={options}
                selected={rsvp}
                select={setRSVP} />
            <button onClick={() => submit()}>
                {t('rsvpButton')} <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
}


export default RSVP;