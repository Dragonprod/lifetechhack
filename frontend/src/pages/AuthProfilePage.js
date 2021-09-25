import React from "react";
import { makeStyles, useTheme } from '@material-ui/styles';
import { FilledInput } from '@mui/material';
import { Link } from "react-router-dom";
import { border, fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  authSection:{
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  authContainer:{
    // width: "50%",
    padding: "2em",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    background: "#E0E2DB",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    padding: "1em 2em",
    width: "320px",
    fontSize: "18px"
    
  },
  udmurtLogo: {
    width: "50px",
    height: "50px"
  },
  udmurtTitle:{
    fontWeight: 900,
    fontSize: "20px",
    lineHeight: "18px",
    marginLeft: ".5em"
  },
  loginBtn:{
    background: "#F93866",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    padding: ".5em 2em", 
    width: "100%",
    color: "#fff", 
    fontWeight: 900,
    fontSize: "24px"
  },
  inputContainer: {
    margin: "2em 0"

  },
  lightText: {
    color: "rgba(0, 0, 0, 0.5)"
  },
  forgetRef: {
    textDecoration: "none",
    color: "#4D9DE0"
  }
}));

function AuthProfilePage() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
      <section className={classes.authSection}>
        <div className={classes.authContainer}>
          <div className={classes.logoContainer}>
              <img className={classes.udmurtLogo} src="https://abali.ru/wp-content/uploads/2013/01/gerb_udmurtii.png" alt="Герб Удмуртии"/>
              <h2 className={classes.udmurtTitle}>Республика <br/> Удмуртия</h2>
          </div>
          <h2 style={{textAlign: "center", fontSize: "36px"}}>Авторизация</h2>
          <div className={classes.inputContainer}>
            <p className={classes.lightText}>Почта</p>
            <input type="text" className={classes.inputField}/>
          </div>
          <div className={classes.inputContainer}>
            <p className={classes.lightText}>Пароль</p>
            <input type="password" className={classes.inputField}/>
          </div>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <Link className={classes.forgetRef} to="/">Забыли пароль?</Link>
          </div>
          <div>
              <button className={classes.loginBtn} style={{margin: "3em 0 0"}}>Войти</button>
              <Link to="/profile">Перейти в кабинет пользователя</Link>
          </div>
          
        </div>
      </section>
      
    );
  }
  
  export default AuthProfilePage;