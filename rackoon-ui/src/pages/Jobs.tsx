import React from "react";
import {Header} from "../components/Header";
import {SideNavigation} from "../components/SideNavigation";

const Jobs: React.FunctionComponent<any> = () => {
    return (
        <div>
            <Header />
            <SideNavigation />
            <h1>Jobs</h1>
        </div>
    );
};

export default Jobs;
