import React from "react";
import { makeStyles, useTheme } from '@mui/core/styles';
import { FilledInput } from '@mui/material';

function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({
 
    }));
    
    
    return (
      <main>
        <div>
            <div className="logo-container">
                <img className="udmurt-logo" src="" alt="Герб Удмуртии"/>
                <h2 className="udmurt-title">Республика Удмуртия</h2>
                <FilledInput/>
            </div>

        </div>
      </main>
    );
  }
  
  export default LandingPage;