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
import API from "../api/api";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    background: "#F8F8FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  warningText: {
    fontSize: "40px",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2em",
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

function RequestsEmpty(props) {
  const classes = useStyles();
  const redirect = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  const calculationProcessStart = async () => {
    const response = await API.post("calc/start?user_id=1");
    redirect.push('/profile/questions')
  };

  return (
    <div className={classes.mainGrid}>
      <header className={classes.mainHeader}>
        <h1 style={{ gridColumn: "1" }}>?????? ??????????????????</h1>
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
              src="https://mui.com/static/images/avatar/1.jpg"
            ></Avatar>
          </li>
        </ul>
      </header>

      <nav className={classes.sidebar}>
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
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => props.push("/profile")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="??????????????" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="?????? ????????????" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 2 }}
                onClick={() => props.push("/profile/info")}
              >
                <ListItemText style={{ marginLeft: 24 }} primary="?????? ????????????" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText
                  style={{ marginLeft: 24 }}
                  primary="?????? ??????????????????"
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText style={{ marginLeft: 24 }} primary="?????? ??????????" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText style={{ marginLeft: 24 }} primary="?????? ????????????" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => props.push("/profile/requests")}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="?????? ??????????????????" />
          </ListItemButton>
        </List>
      </nav>
      <section className={classes.mainContent}>
        <Paper elevation={3} className={classes.profileContainer}>
          <p className={classes.warningText} style={{ marginBottom: 0 }}>
            ?? ?????? ?????? ???????????????? ????????????
          </p>
          <p className={classes.warningText}>
            ???????????????? ????????????, ?????????? ???????????????? ????????????
          </p>
          <Button
            style={{
              background: "#F93866",
              padding: ".5em 5em",
              fontWeight: 900,
            }}
            variant="contained"
            onClick={calculationProcessStart}
          >
            ?????????????? ????????????
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
)(withStyles(useStyles)(RequestsEmpty));
