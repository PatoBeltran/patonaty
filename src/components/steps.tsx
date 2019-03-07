import * as React from "react";
import ReactPageScroller from "react-page-scroller";

import Step from "./design/step";
import Invitation from "./invitation";
import Ceremony from "./ceremony";
import Menu from "./menu";
import Reception from "./reception";
import RSVP from "./rsvp";

const Steps = ({ guest }: any) => (
    <>
        <div className="steps">
            <ReactPageScroller>
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
                    <RSVP />
                </Step>
            </ReactPageScroller>
        </div>
        <Menu />
    </>
)


export default Steps;