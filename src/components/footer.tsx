import * as React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="footer">
                <div className="sign-off">{t("signOff")}</div>
                <div className="sign">{t("sign")}</div>
            </div>
        </>
    );
}

export default Footer;