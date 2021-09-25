import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../../store/dataStorage/actions";
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';
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
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  mainContent: {
    background: "#F8F8FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  profileContainer: {
    background: "#FFFFFF",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    padding: "2em",
  },
  profileIcon: {
    width: "150px",
    height: "150px",
  },
  nameAndPhotoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dataField: {
    padding: "1em",
    margin: "2em",
    borderRadius: "20px",
    background: "rgba(196, 196, 196, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "900px",
  },
  changeBtn: {
    textDecoration: "none",
    color: "#4D9DE0",
    padding: "1em 2em",
    border: "1px solid #4D9DE0",
    cursor: "pointer",
  },
}));

function UserProfilePage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.mainGrid}>
      <header className={classes.mainHeader}>
        <h1 style={{ gridColumn: "1" }}>Главная</h1>
        <ul className={classes.headerItemsList}>
          <li className={classes.li}>
            <NotificationsActiveIcon fontSize="large" onClick={() => {console.log('NotifyClick')}}/>
          </li>
          <li className={classes.li}>
              <Avatar sx={{ width: 48, height: 48 }} onClick={() => {console.log('Avatar Click')}}>IV</Avatar>
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
          <ListItemButton onClick={() => props.push('/profile')}>
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
              <ListItemButton sx={{ pl: 2 }} onClick={() => props.push('/profile/info')}>
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

          <ListItemButton onClick={() => props.push('/profile/requests')}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Мои обращения" />
          </ListItemButton>
        </List>
      </nav>
      <div className={classes.mainContent}>
        <Paper elevation={3} className={classes.profileContainer}>
          <div className={classes.nameAndPhotoContainer}>
            <Avatar sx={{ width: 100, height: 100 }}>IV</Avatar>
            <h2 style={{ fontSize: "36px", marginLeft: "1.5em" }}>Иванов Иван Иванович</h2>
          </div>
          <div className={classes.profileForm}>
            <Paper
              sx={{
                borderRadius: "30px",
                background: "rgba(196, 196, 196, 0.25)",
              }}
              className={classes.dataField}
            >
              <h2>Телефон</h2>
              <p className={classes.userData}>8 999 123-45-67</p>
              <Button variant="outlined">Изменить</Button>
            </Paper>
            <Paper
              sx={{
                borderRadius: "30px",
                background: "rgba(196, 196, 196, 0.25)",
              }}
              className={classes.dataField}
            >
              <h2>Эл. почта</h2>
              <p className={classes.userData}>ivanov@mail.ru</p>
              <Button variant="outlined">Изменить</Button>
            </Paper>
            <Paper
              sx={{
                borderRadius: "30px",
                background: "rgba(196, 196, 196, 0.25)",
              }}
              className={classes.dataField}
            >
              <h2>Пароль</h2>
              <p className={classes.userData}>••••••••••••••••••</p>
              <Button variant="outlined">Изменить</Button>
            </Paper>
          </div>
        </Paper>
      </div>
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
)(withStyles(useStyles)(UserProfilePage));

