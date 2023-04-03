import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";



    ReactDOM.render(
        <div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>, document.getElementById('root'))






