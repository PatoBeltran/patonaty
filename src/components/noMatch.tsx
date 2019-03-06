import * as React from "react";
import { useTranslation } from 'react-i18next';

const NoMatch = ({}) => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('noMatch')}</h1>
        </div>
    );
}

export default NoMatch;