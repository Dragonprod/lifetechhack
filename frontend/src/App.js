import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { withStyles } from '@material-ui/styles';
import { makeStyles, useTheme } from '@material-ui/styles';

import routes from './store/router/routes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function App(props) {
  return (
    <ConnectedRouter history={props.history}>
    { routes }
    </ConnectedRouter>
  );
}

export default withStyles(useStyles)(App);
