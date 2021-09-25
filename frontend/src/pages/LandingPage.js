import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../store/dataStorage/actions";
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      {/* <div className="logo-container">
              <img className="udmurt-logo" src="" alt="Герб Удмуртии"/>
              <h2 className="udmurt-title">Республика Удмуртия</h2>
          </div> */}
      <Button
        variant="outlined"
        onClick={() => {
          props.push("/profile");
        }}
      >
        Profile
      </Button>
      
      <Button
        variant="outlined"
        onClick={() => {
          props.push("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  setFormData,
  push,
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(useStyles)(LandingPage));
