import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";

const Invitation = ({ pronoun, guestName }: any) => {
    const { t } = useTranslation();
    const greetingKey = pronoun == "he"? 'greetHim' : 'greetHer'
    const greeting = t(greetingKey, {guestName: guestName})

    return (
        <div className='step-container animated fadeInDown'>
            <div className='dear-guest'>{greeting},</div>
            <div>
                <span>{t('invitation')}&nbsp;</span>
                <GoldText>{t('date')}.</GoldText>
            </div>
        </div>
    );
}

export default Invitation;