import * as React from "react";
import {useTranslation} from "react-i18next";

const Menu = () => {
    const { t } = useTranslation()
    return (<div className="menu-wrapper">
        <div className="separator" />
        <div className="menu">
            <StepLink>
                {t('invitationStep')}
            </StepLink>
            <StepLink current>
                {t('ceremonyStep')}
            </StepLink>
            <StepLink>
                {t('receptionStep')}
            </StepLink>
            <StepLink>
                {t('rsvpStep')}
            </StepLink>
        </div>
    </div>)
}

const StepLink = ({children, current}: any) => (
    <div className="step-link">
    <div className={current? "current icon" : "icon"}></div>
    <div className={current? "current title" : "title"}>{...children}</div>
    </div>
)


export default Menu;