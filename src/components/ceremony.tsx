import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Location} from "./location";

const Ceremony = () => {
    const { t } = useTranslation();

    return (
        <div className='step-container'>
            <div className='ceremony-desc'>{t('ceremonyDescription')} <GoldText>101 Broadway</GoldText> {t('atTime')} <GoldText>5:30 pm</GoldText></div>
            <Location />
        </div>
    );
}

export default Ceremony;