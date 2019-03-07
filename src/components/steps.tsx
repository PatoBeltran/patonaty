import * as React from "react";
import Step from "./design/step";
import Invitation from "./invitation";
import Ceremony from "./ceremony";
import Menu from "./menu";
import ReactPageScroller from "react-page-scroller";

const Steps = ({guest}: any) => (
    <>
        <div className="steps">
            <ReactPageScroller>
                <Step>
                    <Invitation guestName={guest.name.split(" ")[0]} pronoun={guest.pronoun} />
                </Step>
                <Step>
                    <Ceremony />
                </Step>
            </ReactPageScroller>
        </div>
        <Menu />
    </>
)


export default Steps;