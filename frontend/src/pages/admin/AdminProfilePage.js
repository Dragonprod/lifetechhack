import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../../store/dataStorage/actions";
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
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import API from "../../api/api";

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
    alignItems: "center",
    flexDirection: "column",
    padding: "2em",
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
  commonStatsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0 2em",
  },
  statsTitle: {
    margin: 0,
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "18px",
  },
  statsNumber: {
    margin: 0,
    fontWeight: 900,
    color: "#000",
    fontSize: "40px",
  },
  statsIcon: {
    width: "80px",
    height: "80px",
  },
  statContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0 10px",
  },
  contentContainer:{
    maxWidth: "1400px"
  }
}));

function AdminProfilePage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [labels, setLabels] = React.useState([]);
  const [dataset, setDataset] = React.useState([]);
  const [dataset2, setDataset2] = React.useState([]);

  const getData = async (e) => {
    const response = await API.get(`region/income/2`);

    for (var i = 0; i < response.data.length; i++) {
      setLabels((prevLabels) => [...prevLabels, response.data[i].date]);
      setDataset((prevLabels) => [...prevLabels, response.data[i].count]);
    }

    const response1 = await API.get(`region/income/1`);

    for (var i = 0; i < response1.data.length; i++) {
      setDataset2((prevDataSet) => [...prevDataSet, response1.data[i].count]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "Доходы",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        fill: false,
        data: dataset,
      },
      {
        type: "line",
        label: "Расходы",
        backgroundColor: "rgb(255, 99, 132)",
        data: dataset2,
        borderWidth: 2,
      },
    ],
  };

  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "Region income",
  //       data: dataset,
  //       fill: false,
  //       backgroundColor: "rgb(255, 99, 132)",
  //       borderColor: "rgba(255, 99, 132, 0.2)",
  //     },
  //   ],
  // };

  //   const options = {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   };

  return (
    <div className={classes.mainGrid}>
      <header className={classes.mainHeader}>
        <h1 style={{ gridColumn: "1" }}>Главная</h1>
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
          <ListItemButton onClick={() => props.push("/admin")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItemButton>

          <ListItemButton onClick={() => props.push("/admin/heatmap")}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Тепловая карта" />
          </ListItemButton>

          <ListItemButton onClick={() => props.push("/admin/rmap")}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Статистика по регионам" />
          </ListItemButton>

          <ListItemButton onClick={() => props.push("/admin/requests")}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Обращения" />
          </ListItemButton>
        </List>
      </nav>
      <div className={classes.mainContent}>
        <div className={classes.contentContainer}>
          <Paper elevation={3} style={{ display: "flex", padding: "1.5em" }}>
            <img
              src="https://sun9-24.userapi.com/impg/dhZHq7u-0tBfT5-YqIVgfp1nPE-mQFOjduK9iQ/S8flo6ydux0.jpg?size=500x349&quality=96&sign=30f3f2ce424b25509866efa8de790e4e&type=album"
              alt="Тепловая карта"
              style={{ marginRight: "2em" }}
            />
            <div className={classes.commonStatsGrid}>
              <div className={classes.statContainer} style={{}}>
                <svg
                  className={classes.statsIcon}
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="55" height="55" rx="10" fill="#FFF4DE" />
                  <g clip-path="url(#clip0)">
                    <path
                      d="M31.3334 34.202H40.6364V37.8985H31.3334V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 39.7468H40.6364V43.4434H31.3334V39.7468Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 28.6571H40.6364V32.3537H31.3334V28.6571Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M16.4976 30.6011L15.2152 30.5875L15.1349 28.7437C21.9955 28.075 28.1587 24.2638 31.8128 18.4816L29.5909 17.4447L37.9434 12.3654L39.4216 22.0301L36.8496 20.8307C35.0942 23.4632 32.2622 26.6888 28.1866 28.4332C24 30.2247 19.5192 30.6011 16.4976 30.6011Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M20.6265 43.4434H11.3235V39.7469H20.6265V43.4434Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 34.202H31.7163V37.8986H22.4749V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 39.7469H31.7163V43.4434H22.4749V39.7469Z"
                      fill="#FFB929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="31.5441"
                        height="31.5441"
                        fill="white"
                        transform="translate(11.3235 12.1324)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3 className={classes.statsTitle}>Средний доход</h3>
                  <h2 className={classes.statsNumber}>18654</h2>
                </div>
              </div>
              <div className={classes.statContainer} style={{}}>
                <svg
                  className={classes.statsIcon}
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="55" height="55" rx="10" fill="#FFF4DE" />
                  <g clip-path="url(#clip0)">
                    <path
                      d="M31.3334 34.202H40.6364V37.8985H31.3334V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 39.7468H40.6364V43.4434H31.3334V39.7468Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 28.6571H40.6364V32.3537H31.3334V28.6571Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M16.4976 30.6011L15.2152 30.5875L15.1349 28.7437C21.9955 28.075 28.1587 24.2638 31.8128 18.4816L29.5909 17.4447L37.9434 12.3654L39.4216 22.0301L36.8496 20.8307C35.0942 23.4632 32.2622 26.6888 28.1866 28.4332C24 30.2247 19.5192 30.6011 16.4976 30.6011Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M20.6265 43.4434H11.3235V39.7469H20.6265V43.4434Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 34.202H31.7163V37.8986H22.4749V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 39.7469H31.7163V43.4434H22.4749V39.7469Z"
                      fill="#FFB929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="31.5441"
                        height="31.5441"
                        fill="white"
                        transform="translate(11.3235 12.1324)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <h3 className={classes.statsTitle}>Средний убыток</h3>
                  <h2 className={classes.statsNumber}>18654</h2>
                </div>
              </div>
              <div className={classes.statContainer} style={{}}>
                <svg
                  className={classes.statsIcon}
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="55" height="55" rx="10" fill="#FFF4DE" />
                  <g clip-path="url(#clip0)">
                    <path
                      d="M31.3334 34.202H40.6364V37.8985H31.3334V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 39.7468H40.6364V43.4434H31.3334V39.7468Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 28.6571H40.6364V32.3537H31.3334V28.6571Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M16.4976 30.6011L15.2152 30.5875L15.1349 28.7437C21.9955 28.075 28.1587 24.2638 31.8128 18.4816L29.5909 17.4447L37.9434 12.3654L39.4216 22.0301L36.8496 20.8307C35.0942 23.4632 32.2622 26.6888 28.1866 28.4332C24 30.2247 19.5192 30.6011 16.4976 30.6011Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M20.6265 43.4434H11.3235V39.7469H20.6265V43.4434Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 34.202H31.7163V37.8986H22.4749V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 39.7469H31.7163V43.4434H22.4749V39.7469Z"
                      fill="#FFB929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="31.5441"
                        height="31.5441"
                        fill="white"
                        transform="translate(11.3235 12.1324)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3 className={classes.statsTitle}>Средний доход</h3>
                  <h2 className={classes.statsNumber}>18654</h2>
                </div>
              </div>
              <div className={classes.statContainer} style={{}}>
                <svg
                  className={classes.statsIcon}
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="55" height="55" rx="10" fill="#FFF4DE" />
                  <g clip-path="url(#clip0)">
                    <path
                      d="M31.3334 34.202H40.6364V37.8985H31.3334V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 39.7468H40.6364V43.4434H31.3334V39.7468Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M31.3334 28.6571H40.6364V32.3537H31.3334V28.6571Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M16.4976 30.6011L15.2152 30.5875L15.1349 28.7437C21.9955 28.075 28.1587 24.2638 31.8128 18.4816L29.5909 17.4447L37.9434 12.3654L39.4216 22.0301L36.8496 20.8307C35.0942 23.4632 32.2622 26.6888 28.1866 28.4332C24 30.2247 19.5192 30.6011 16.4976 30.6011Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M20.6265 43.4434H11.3235V39.7469H20.6265V43.4434Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 34.202H31.7163V37.8986H22.4749V34.202Z"
                      fill="#FFB929"
                    />
                    <path
                      d="M22.4749 39.7469H31.7163V43.4434H22.4749V39.7469Z"
                      fill="#FFB929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="31.5441"
                        height="31.5441"
                        fill="white"
                        transform="translate(11.3235 12.1324)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3 className={classes.statsTitle}>Средний доход</h3>
                  <h2 className={classes.statsNumber}>18654</h2>
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={{ width: "100%", marginTop: "5em" }}>
            <Bar data={data} />
          </Paper>
        
        </div>
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
)(withStyles(useStyles)(AdminProfilePage));
