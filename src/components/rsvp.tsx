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
    let description = t("rsvpDescription")

    if (guest.plusOne) {
        optionsKey = "rsvpCoupleOptions"
        description = t("rsvpCoupleDescription", {partnerName: guest.plusOne.name.split(" ")[0]})
    }

    const options = t(optionsKey, {returnObjects: true})

    let [rsvp, setRSVP] = React.useState<IRSVP>(status ? status : options[0])
    let [loading, setLoading] = React.useState<boolean>(false);

    const submit = () => {
        if(rsvp.key == Status.going) {
            going(guest.id, setLoading)
            guest.plusOne && notGoing(guest.plusOne.id, setLoading)
        } else if(rsvp.key == Status.notGoing) {
            notGoing(guest.id, setLoading)
            guest.plusOne && notGoing(guest.plusOne.id, setLoading)
        } else if(rsvp.key == Status.coupleGoing) {
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