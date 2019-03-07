import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Dropdown} from "./design/dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const RSVP = ({couple, status}: any) => {
    const { t } = useTranslation();
    const options = t('rsvpOptions', {returnObjects: true})
    let [rsvp, setRSVP] = React.useState<string>(status ? status : options[0])
    const description = couple ? t('rsvpCoupleDescription'): "No description yet"
    
    return (
        <>
            <h1><GoldText>Répondez s'il vous plaît</GoldText></h1>
            <h2>{description}</h2>
            <Dropdown
            options={t('rsvpOptions', {returnObjects: true})}
            selected={rsvp}
            select={setRSVP} />
            <button>{t('rsvpButton')} <FontAwesomeIcon icon={faPaperPlane} /></button>
        </>
    );
}

export default RSVP;