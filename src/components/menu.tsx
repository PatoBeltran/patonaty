import * as React from "react";
import {useTranslation} from "react-i18next";
import StepLink from "./stepLink";

const Menu = () => {
    const { t } = useTranslation()
    React.useEffect(() => {
        window.onscroll = showProgress
    })
    return (
    <div className="menu-wrapper">
        <div className="separator">
            <div id="progress" />
        </div>
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

const showProgress = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    const progress = document && document.getElementById("progress");
    if (progress) {
        progress.style.height = scrolled + "%";
    }
}


export default Menu;