import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore, { history } from './store/router/configureStore'

const store = configureStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App history={history} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
