import * as React from "react";
import { useTranslation } from 'react-i18next';
import GoldText from "./design/goldText";

const NoMatch = ({}) => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('pageNotFound')} <GoldText>Naty</GoldText> {t('or')} <GoldText>Pato</GoldText></h1>
            <h1>{t('thankYou')}</h1>
        </>
    );
}

export default NoMatch;