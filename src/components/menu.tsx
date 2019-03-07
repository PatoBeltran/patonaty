import * as React from "react";
import {useTranslation} from "react-i18next";
import {StepLink} from "./stepLink";

const Menu = () => {
    const { t } = useTranslation()
    return (
    <div className="menu-wrapper">
        <div className="separator" />
        <div className="menu">
            <StepLink linkTo="invitation">
                {t('invitationStep')}
            </StepLink>
            <StepLink linkTo="ceremony">
                {t('ceremonyStep')}
            </StepLink>
            <StepLink linkTo="reception">
                {t('receptionStep')}
            </StepLink>
            <StepLink linkTo="rsvp">
                {t('rsvpStep')}
            </StepLink>
        </div>
    </div>)
}


export default Menu;