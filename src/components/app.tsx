import * as React from "react";
import { useTranslation } from 'react-i18next';
import * as BackgroundImg from "../assets/background.jpg";

export const App = ({}) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <h1>{t('welcome')}</h1>
        </React.Fragment>
    );
}

