import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Dropdown} from "./design/dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { going, notGoing } from "../framework/trello"
import {Loading} from "./loading";

export interface IRSVP {
    key: Status,
    value: string
}


enum Status {
    going = "going",
    notGoing = "notGoing",
    coupleGoing = "coupleGoing"
}


const RSVP = ({guest, status}: any) => {
    const { t } = useTranslation();
    let optionsKey = "rsvpOptions"
    let descriptionKey = "rsvpDescription"

    if (guest.plusOne) {
        optionsKey = "rsvpCoupleOptions"
        descriptionKey = "rsvpCoupleDescription"
    }

    const description = t(descriptionKey, {partnerName: guest.plusOne.name.split(" ")[0]})
    const options = t(optionsKey, {returnObjects: true})

    let [rsvp, setRSVP] = React.useState<IRSVP>(status ? status : options[0])
    let [loading, setLoading] = React.useState<boolean>(false);

    const submit = () => {
        if(rsvp.key == Status.going) {
            going(guest.id, setLoading)
            notGoing(guest.plusOne.id, setLoading)
        } else if(rsvp.key == Status.notGoing) {
            notGoing(guest.id, setLoading)
            notGoing(guest.plusOne.id, setLoading)
        } else if(rsvp.key == Status.coupleGoing) {
            going(guest.id, setLoading)
            going(guest.plusOne.id, setLoading)
        }
    }

    if (loading) return <Loading />;

    return (
        <>
            <h1><GoldText>Répondez s'il vous plaît</GoldText></h1>
            <h2>{description}</h2>
            <Dropdown
            options={options}
            selected={rsvp}
            select={setRSVP} />
            <button onClick={() => submit()}>
                {t('rsvpButton')} <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </>
    );
}

export default RSVP;