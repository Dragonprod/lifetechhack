import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../store/dataStorage/actions";
import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import API from "../api/api";

const useStyles = makeStyles((theme) => ({
  authSection: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    // width: "50%",
    padding: "2em",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    background: "#E0E2DB",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    padding: "1em 2em",
    width: "320px",
    fontSize: "18px",
  },
  udmurtLogo: {
    width: "50px",
    height: "50px",
  },
  udmurtTitle: {
    fontWeight: 900,
    fontSize: "20px",
    lineHeight: "18px",
    marginLeft: ".5em",
  },
  loginBtn: {
    background: "#F93866",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    padding: ".5em 2em",
    width: "100%",
    color: "#fff",
    fontWeight: 900,
    fontSize: "24px",
  },
  inputContainer: {
    margin: "2em 0",
  },
  lightText: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  forgetRef: {
    textDecoration: "none",
    color: "#4D9DE0",
  },
}));

function AuthPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  const redirect = props;

  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const parseJwt = (token) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  const loginProccess = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const res = await API.post(`users/login`, data);

    if (res.data.status_code == 400) setError(true);
    else if (res.data.status_code == 404) setError(true);
    
    try{
      const parse = parseJwt(res.data.token)
      if (parse.is_admin == true) redirect.push("/admin");
      else if (parse.is_admin == false) redirect.push("/profile");
    }
    catch(e){
      console.log(e)
    }
    

  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={classes.authSection}>
      <Paper elevation={3} className={classes.authContainer}>
        <div className={classes.logoContainer}>
          <img
            className={classes.udmurtLogo}
            src="https://abali.ru/wp-content/uploads/2013/01/gerb_udmurtii.png"
            alt="???????? ????????????????"
          />
          <h2 className={classes.udmurtTitle}>
            ???????????????????? <br /> ????????????????
          </h2>
        </div>

        <h2 style={{ textAlign: "center", fontSize: "36px" }}>??????????????????????</h2>
        <div className={classes.inputContainer}>
          <p className={classes.lightText}>??????????</p>
          <input
            type="text"
            className={classes.inputField}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.lightText}>????????????</p>
          <input
            type="password"
            className={classes.inputField}
            onChange={handleChangePassword}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography className={classes.forgetRef} variant="h6">
            ???????????? ?????????????
          </Typography>
        </div>
        <div>
          <Button
            className={classes.loginBtn}
            style={{
              background: "#F93866",
              padding: "1em 3em",
              marginTop: "4em",
              fontWeight: 900,
            }}
            variant="contained"
            onClick={loginProccess}
          >
            ??????????
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={error}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              severity="error"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              <AlertTitle>????????????</AlertTitle>
              ?????????????????? ??? <strong>?????????? ?????? ????????????!</strong>
            </Alert>
          </Snackbar>

          <Divider />
        </div>
      </Paper>
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
)(withStyles(useStyles)(AuthPage));
