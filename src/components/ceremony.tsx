import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";
import {Location} from "./location";

const Ceremony = () => {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t('ceremonyDescription')} <GoldText>101 Broadway</GoldText> {t('at')} <GoldText>5:30 pm</GoldText></h2>
            <Location />
        </>
    );
}

export default Ceremony;