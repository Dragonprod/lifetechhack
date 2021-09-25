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

const invalidGroups = [
  { label: "Нет" },
  { label: "Первая группа" },
  { label: "Вторая группа" },
  { label: "Третья группа" },
];
const illnesses = [
  { label: "Нет" },
  { label: "Нарушение осанки" },
  { label: "Астма" },
  { label: "Поллиноз" },
  { label: "Гипертензия" },
];

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
    color: "#000",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2em",
    maxWidth: "25%"
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
  const [step, setStep] = React.useState(0);

  const step1 = step == 0 ? true : false;
  const step2 = step == 1 ? true : false;
  const step3 = step == 2 ? true : false;
  const step4 = step == 3 ? true : false;
  const step5 = step == 4 ? true : false;
  const step6 = step == 5 ? true : false;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleStepNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleStepBack = () => {
    setStep((prevStep) => prevStep - 1);
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
        {/* <Paper elevation={3} className={classes.profileContainer}>
            <img src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album" alt="Логотип министерства Удмуртии" />
            <h1 className={classes.questionNumber}>Вопрос 2a</h1>
            <p className={classes.questionText}>Ежемесячный доход Вашей жены:</p>
            <input type="text" className={classes.inputField} />
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              variant="contained"
            >
              Далее
            </Button>
        </Paper> */}


        {step1 &&
        (
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
              onClick={handleStepNext}
              variant="contained"
            >
              Далее
            </Button>
          </Paper>
        )}

        {step2 &&
        (
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
            <div>
              <Button
                style={{
                  background: "#3D348B",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                  marginRight: "2em",
                }}
                onClick={handleStepBack}
                variant="contained"
              >
                Назад
              </Button>
              <Button
                style={{
                  background: "#F93866",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                }}
                onClick={handleStepNext}
                variant="contained"
              >
                Далее
              </Button>
            </div>
          </Paper>
        )}

        {step3 &&
        (
          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Вопрос 3</h1>
            <p className={classes.questionText}>Количество детей:</p>
            <input type="text" className={classes.inputField} />
            <div>
              <Button
                style={{
                  background: "#3D348B",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                  marginRight: "2em",
                }}
                onClick={handleStepBack}
                variant="contained"
              >
                Назад
              </Button>
              <Button
                style={{
                  background: "#F93866",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                }}
                onClick={handleStepNext}
                variant="contained"
              >
                Далее
              </Button>
            </div>
          </Paper>
        )}

        {step4 &&
        (
          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Вопрос 5</h1>
            <p className={classes.questionText}>Ваше имущество:</p>
            <div className={classes.inputContainer}>
              <p className={classes.lightText}>Количество квартир</p>
              <input type="text" className={classes.inputField} />
            </div>
            <div className={classes.inputContainer}>
              <p className={classes.lightText}>Количество домов</p>
              <input type="text" className={classes.inputField} />
            </div>
            <div className={classes.inputContainer}>
              <p className={classes.lightText}>Количество машин</p>
              <input type="text" className={classes.inputField} />
            </div>

            <div>
              <Button
                style={{
                  background: "#3D348B",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                  marginRight: "2em",
                }}
                onClick={handleStepBack}
                variant="contained"
              >
                Назад
              </Button>
              <Button
                style={{
                  background: "#F93866",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                }}
                onClick={handleStepNext}
                variant="contained"
              >
                Далее
              </Button>
            </div>
          </Paper>
        )}

        {step5 &&
        (
          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Вопрос 6</h1>
            <p className={classes.questionText}>Группа инвалидности:</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={invalidGroups}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />

            <div>
              <Button
                style={{
                  background: "#3D348B",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                  marginRight: "2em",
                }}
                onClick={handleStepBack}
                variant="contained"
              >
                Назад
              </Button>
              <Button
                style={{
                  background: "#F93866",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                }}
                onClick={handleStepNext}
                variant="contained"
              >
                Далее
              </Button>
            </div>
          </Paper>
        )}

        {step6 &&
        (
          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Вопрос 7</h1>
            <p className={classes.questionText}>Хронические заболевания:</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={illnesses}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />

            <div>
              <Button
                style={{
                  background: "#3D348B",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                  marginRight: "2em",
                }}
                onClick={handleStepBack}
                variant="contained"
              >
                Назад
              </Button>
              <Button
                style={{
                  background: "#F93866",
                  padding: ".5em 3em",
                  marginTop: "4em",
                  fontWeight: 900,
                }}
                onClick={handleStepNext}
                variant="contained"
              >
                Далее
              </Button>
            </div>
          </Paper>
        )}



          {/* <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Ответ 1</h1>
            <p className={classes.questionText}>Ваш доход превышает прожиточный минимум</p>
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              onClick={handleStepNext}
              variant="contained"
            >
              Закрыть
            </Button>
          </Paper> */}


          {/* <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Ответ 2</h1>
            <p className={classes.questionText}>Учитывая объекты Вашей собственности, Ваше финансовое положение выше прожиточного минимума</p>
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              onClick={handleStepNext}
              variant="contained"
            >
              Закрыть
            </Button>
          </Paper> */}
      
          {/* <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Ответ 3</h1>
            <p className={classes.questionText}>В качестве помощи Вам будут начисляться льготы</p>
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              onClick={handleStepNext}
              variant="contained"
            >
              Закрыть
            </Button>
          </Paper> */}


          <Paper elevation={3} className={classes.profileContainer}>
            <img
              src="https://sun9-17.userapi.com/impg/cp7eNynJtS-3BstG6vALJ4lCv83YBtPFxAuBbQ/9vVPXJIq2zI.jpg?size=260x46&quality=96&sign=ff69fb9287c1da4786d3bf0a39b5f5e2&type=album"
              alt="Логотип министерства Удмуртии"
            />
            <h1 className={classes.questionNumber}>Ответ 4</h1>
            <p className={classes.questionText}>В качестве помощи Вам будут предоставлять лекарства по Вашему диагнозу</p>
            <Button
              style={{
                background: "#F93866",
                padding: ".5em 3em",
                marginTop: "4em",
                fontWeight: 900,
              }}
              onClick={handleStepNext}
              variant="contained"
            >
              Закрыть
            </Button>
          </Paper>      
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
