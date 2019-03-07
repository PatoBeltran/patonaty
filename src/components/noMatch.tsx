import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";

const NoMatch = ({}) => {
    const { t } = useTranslation();

    return (
        <div className="no-invitation-container">
            <h1>{t('pageNotFound')}</h1>
            <h1>{t('pleaseContact')} <GoldText>Naty</GoldText> {t('or')} <GoldText>Pato</GoldText></h1>
            <h1>{t('thankYou')}</h1>
        </div>
    );
}

export default NoMatch;