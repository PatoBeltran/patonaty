import * as React from "react";
import ReactPageScroller from "react-page-scroller";

import Step from "./design/step";
import Invitation from "./invitation";
import Ceremony from "./ceremony";
import Menu from "./menu";
import Reception from "./reception";
import RSVP from "./rsvp";

export default class Steps extends React.Component<any, any> {
    private scroller: any;

    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: 1
        };

        this.scroller = null;
        this.goToPage = this.goToPage.bind(this);
        this.pageOnChange = this.pageOnChange.bind(this);
    }

    pageOnChange(number: number) {
        this.setState({ currentPage: number });
    };

    goToPage(pageNumber: number) {
        this.scroller.goToPage(pageNumber);
    }

    render() {
        const { guest } = this.props;
        return (
            <>
                <div className="steps">
                    <ReactPageScroller ref={(c: any) => this.scroller = c} pageOnChange={this.pageOnChange}>
                        <Step>
                            <Invitation guestName={guest.name.split(" ")[0]} pronoun={guest.pronoun} />
                        </Step>
                        <Step>
                            <Ceremony />
                        </Step>
                        <Step>
                            <Reception />
                        </Step>
                        <Step>
                            <RSVP guest={guest}/>
                        </Step>
                    </ReactPageScroller>
                </div>
                <Menu currentPage={this.state.currentPage} goToPage={(page: number) => this.goToPage(page)} />
            </>);
    }
}
