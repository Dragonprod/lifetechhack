import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../store/dataStorage/actions";
import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const married = [{ label: "Женат" }, { label: "Не женат" }];

const useStyles = makeStyles((theme) => ({
  mainContent: {
    background: "#F8F8FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  questionNumber: {
    fontSize: "36px",
  },
  questionText: {
    fontSize: "18px",
    color: "rgba(0, 0, 0, 0.5)",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2em",
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
  mainGrid: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "minmax(15em, 1.5fr) 7fr",
    gridTemplateRows: "1fr 8fr",
    gridTemplateAreas: `
        "sidebar header"
        "sidebar main"
        `,
  },
  mainHeader: {
    gridArea: "header",
    display: "grid",
    alignItems: "center",
    padding: "0 4em",
    background: "#fff",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
  },
  headerIcon: {
    width: "30px",
    height: "30px",
  },
  li: {
    listStyle: "none",
  },
  headerItemsList: {
    gridColumn: "4 / 5",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sidebar: {
    gridArea: "sidebar",
    padding: "1em",
    background: "#fff",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  blockRef: {
    display: "block",
    textDecoration: "none",
    color: "#000",
  },
}));

function Questions(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [next, setNext] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setNext(!next);
  };

  return (
    <div className={classes.mainGrid}>
      <header className={classes.mainHeader}>
        <h1 style={{ gridColumn: "1" }}>Мои обращения</h1>
        <ul className={classes.headerItemsList}>
          <li className={classes.li}>
            <NotificationsActiveIcon
              fontSize="large"
              onClick={() => {
                console.log("NotifyClick");
              }}
            />
          </li>
          <li className={classes.li}>
            <Avatar
              sx={{ width: 48, height: 48 }}
              onClick={() => {
                console.log("Avatar Click");
              }}
            >
              IV
            </Avatar>
          </li>
        </ul>
      </header>

      <nav className={classes.sidebar}>
        <div className={classes.logoContainer}>
          <img
            className={classes.udmurtLogo}
            src="https://abali.ru/wp-content/uploads/2013/01/gerb_udmurtii.png"
            alt="Герб Удмуртии"
          />
          <h2 className={classes.udmurtTitle}>
            Республика <br /> Удмуртия
          </h2>
        </div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => props.push("/profile")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="Мои данные" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => props.push("/profile/info")}
              >
                <ListItemText style={{ marginLeft: 24 }} primary="Мои данные" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText
                  style={{ marginLeft: 24 }}
                  primary="Мое имущество"
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText style={{ marginLeft: 24 }} primary="Моя семья" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText style={{ marginLeft: 24 }} primary="Моя работа" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => props.push("/profile/requests")}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Мои обращения" />
          </ListItemButton>
        </List>
      </nav>
      <section className={classes.mainContent}>
        {!next && (
          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Вопрос 1</h1>
            <p className={classes.questionText}>Ваш ежемесячный доход:</p>
            <input type="text" className={classes.inputField} />
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              onClick={handleClick1}
              variant="contained"
            >
              Далее
            </Button>
          </Paper>
        )}
        {next && (
          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Вопрос 2</h1>
            <p className={classes.questionText}>Ваше семейное положение:</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={married}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              onClick={handleClick1}
              variant="contained"
            >
              Далее
            </Button>
          </Paper>
        )}
      </section>
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
)(withStyles(useStyles)(Questions));
