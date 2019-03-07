import * as React from "react";
import {Link} from "react-scroll";

export const StepLink = ({children, linkTo}: any) => {
    let [active, setActive] = React.useState<boolean>(false)
    return (
    <Link
        to={linkTo}
        className="step-link"
        spy
        smooth
        offset={-100}
        duration={500}
        onSetActive={(_: string) => setActive(true)}
        onSetInactive={() => setActive(false)}>
        <div className={active? "active icon" : "icon"}></div>
        <div className={active? "active title" : "title"}>{...children}</div>
    </Link>)
}
