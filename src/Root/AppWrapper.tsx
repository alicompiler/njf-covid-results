import HomePage from "../Home/HomePage";
import React from "react";
import {Provider as ReduxProvider} from "react-redux";
import store from "./Redux/ReduxStore";

export class AppWrapper extends React.Component {
    render() {
        return <ReduxProvider store={store}>
            <div className={'container mx-auto'}>
                <HomePage />
            </div>
        </ReduxProvider>;
    }
}