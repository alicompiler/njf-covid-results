import React from 'react';
import ReactDOM from 'react-dom';
import {AppWrapper} from "./Root/AppWrapper";
import {configureI18n} from "./Bootstrap/I18n/setup";

configureI18n();

ReactDOM.render(
    <React.StrictMode>
        <AppWrapper/>
    </React.StrictMode>,
    document.getElementById('root')
);