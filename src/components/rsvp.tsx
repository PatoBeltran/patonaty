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
        <div className='step-container'>
            <div><GoldText>Répondez s'il vous plaît</GoldText></div>
            <div>{description}</div>
            <Dropdown
                options={t('rsvpOptions', {returnObjects: true})}
                selected={rsvp}
                select={setRSVP} />
            <button>{t('rsvpButton')} <FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    );
}

export default RSVP;