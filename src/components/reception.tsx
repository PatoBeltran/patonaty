import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Location} from "./location";

const Reception = () => {
    const { t } = useTranslation();

    return (
        <div className='step-container'>
            <div className='reception-desc'>{t('receptionDescription')} <GoldText>Optimism</GoldText>, {t('receptionDescription2')} <GoldText>7pm</GoldText> {t('to')} <GoldText>11:30pm</GoldText></div>
            <Location />
        </div>
    );
}

export default Reception;