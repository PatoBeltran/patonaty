import * as React from "react";

export const StepLink = ({ active, children, onClick }: any) => {
    return (
        <a onClick={(e: any) => {
            e && e.preventDefault();
            onClick();
        }}
            className="step-link">
            <div className={active ? "active icon" : "icon"}></div>
            <div className={active ? "active title" : "title"}>{...children}</div>
        </a>)
}
