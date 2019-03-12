import * as React from "react";

import Step from "./step";
import Invitation from "./invitation";
import Ceremony from "./ceremony";
import Menu from "./menu";
import Reception from "./reception";
import RSVP, { listToStatus } from "./rsvp";
import { useTranslation } from "react-i18next";

const Steps = ({ guest }: any) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="steps">
                <Step name="invitation">
                    <Invitation guestName={guest.name.split(" ")[0]} pronoun={guest.pronoun} />
                </Step>
                <Step name="ceremony">
                    <Ceremony />
                </Step>
                <Step name="reception">
                    <Reception />
                </Step>
                <Step name="rsvp">
                    <RSVP guest={guest} status={listToStatus(guest, t)} />
                </Step>
            </div>
            <Menu />
        </>);
};

export default Steps;
