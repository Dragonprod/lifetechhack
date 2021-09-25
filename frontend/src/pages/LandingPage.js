import React from "react";
import { makeStyles, useTheme } from '@material-ui/styles';
import { FilledInput } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
      <div>
          <div className="logo-container">
              <img className="udmurt-logo" src="" alt="Герб Удмуртии"/>
              <h2 className="udmurt-title">Республика Удмуртия</h2>
          </div>

      </div>
    );
  }
  
  export default LandingPage;