import * as React from "react";
import Step from "./design/step";
import Invitation from "./invitation";
import Ceremony from "./ceremony";


const Steps = ({guest}: any) => (
    <div className="steps">
        <Step>
            <Invitation guestName={guest.name.split(" ")[0]} pronoun="she"/>
        </Step>
        <Step>
            <Ceremony />
        </Step>
    </div>
)


export default Steps;