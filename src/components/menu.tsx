import * as React from "react";
import {useTranslation} from "react-i18next";
import {StepLink} from "./stepLink";

const Menu = ({ currentPage, goToPage }: any) => {
    const { t } = useTranslation();
    
    return (
    <div className="menu-wrapper">
        <div className="separator" />
        <div className="menu">
            <StepLink active={currentPage === 1} linkTo="invitation" onClick={() => goToPage(0)}>
                {t('invitationStep')}
            </StepLink>
            <StepLink active={currentPage === 2} linkTo="ceremony" onClick={() => goToPage(1)}>
                {t('ceremonyStep')}
            </StepLink>
            <StepLink active={currentPage === 3} linkTo="reception" onClick={() => goToPage(2)}>
                {t('receptionStep')}
            </StepLink>
            <StepLink active={currentPage === 4} linkTo="rsvp" onClick={() => goToPage(3)}>
                {t('rsvpStep')}
            </StepLink>
        </div>
    </div>)
}


export default Menu;