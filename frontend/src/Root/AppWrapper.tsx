import HomePage from "../Pages/Home/HomePage";
import React from "react";
import {Provider as ReduxProvider} from "react-redux";
import store from "./Redux/ReduxStore";
import {withTranslation} from "react-i18next";
import {i18n} from "i18next";

interface Props {
    t: (item: string) => string;
    i18n: i18n;
}

class _AppWrapper extends React.Component<Props> {
    render() {
        const {i18n} = this.props;
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        return <ReduxProvider store={store}>
            <div className={'container mx-auto'} style={{direction: dir}}>
                <HomePage/>
            </div>
        </ReduxProvider>;
    }
}

export const AppWrapper = withTranslation()(_AppWrapper);