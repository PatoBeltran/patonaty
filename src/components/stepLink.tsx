import * as React from "react";
import {Link} from "react-scroll";

const StepLink = ({children, linkTo}: any) => {
    let [active, setActive] = React.useState<boolean>(false)
    return (
    <Link
        to={linkTo}
        className="step-link"
        spy
        smooth
        offset={-75}
        duration={500}
        onSetActive={(_: string) => setActive(true)}
        onSetInactive={() => setActive(false)}>
        <div className={active? "active icon" : "icon"} data-percent="50"></div>
        <div className={active? "active title" : "title"}>{children}</div>
    </Link>)
}

export default StepLink;