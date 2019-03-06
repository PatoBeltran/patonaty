import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";

const Invitation = ({ pronoun, guestName }: any) => {
    const { t } = useTranslation();
    const greetingKey = pronoun == "he"? 'greetHim' : 'greetHer'
    const greeting = t(greetingKey, {guestName: guestName})

    return (
        <>
            <h1>{greeting},</h1>
            <h1>
                <span>{t('invitation')}&nbsp;</span>
                <GoldText>{t('date')}.</GoldText>
            </h1>
        </>
    );
}

export default Invitation;