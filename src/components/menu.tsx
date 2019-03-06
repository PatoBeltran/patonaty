import * as React from "react";
import {useTranslation} from "react-i18next";

const Menu = () => {
    const { t } = useTranslation()
    return (<div className="menu">
        <StepLink>
            {t('invitationStep')}
        </StepLink>
        <StepLink>
            {t('ceremonyStep')}
        </StepLink>
        <StepLink>
            {t('receptionStep')}
        </StepLink>
        <StepLink>
            {t('rsvpStep')}
        </StepLink>
    </div>)
}

const StepLink = ({children}: any) => (
    <div>{...children}</div>
)


export default Menu;