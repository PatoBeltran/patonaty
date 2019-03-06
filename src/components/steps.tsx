import * as React from "react";
import Step from "./design/step";
import Invitation from "./invitation";
import Ceremony from "./ceremony";
import Menu from "./menu";


const Steps = ({guest}: any) => (
    <div className="app-container">
        <div className="steps">
            <Step>
                <Invitation guestName={guest.name.split(" ")[0]} pronoun={guest.pronoun}/>
            </Step>
            <Step>
                <Ceremony />
            </Step>
        </div>
        <Menu />
    </div>
)


export default Steps;