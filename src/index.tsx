import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './Home/HomePage';
import {AppWrapper} from "./Root/AppWrapper";

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);