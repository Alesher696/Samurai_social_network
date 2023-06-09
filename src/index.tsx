import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <div>
      <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
      </BrowserRouter>
    </div>, document.getElementById('root'))






