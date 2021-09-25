import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
// import { List, sliderClasses } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ListSubheader from "@mui/material/ListSubheader";
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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
    zIndex: -1,
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

function UserProfilePage() {
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
            <a href="/">
              <svg
                className={classes.headerIcon}
                height="512pt"
                viewBox="-43 0 512 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m413.417969 360.8125c-32.253907-27.265625-50.75-67.117188-50.75-109.335938v-59.476562c0-75.070312-55.765625-137.214844-128-147.625v-23.042969c0-11.796875-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.535156-21.332031 21.332031v23.042969c-72.257812 10.410156-128 72.554688-128 147.625v59.476562c0 42.21875-18.496094 82.070313-50.945312 109.503907-8.296876 7.105469-13.054688 17.429687-13.054688 28.351562 0 20.589844 16.746094 37.335938 37.332031 37.335938h352c20.589844 0 37.335938-16.746094 37.335938-37.335938 0-10.921875-4.757813-21.246093-13.25-28.519531zm0 0" />
                <path d="m213.332031 512c38.636719 0 70.957031-27.542969 78.378907-64h-156.757813c7.425781 36.457031 39.746094 64 78.378906 64zm0 0" />
              </svg>
            </a>
          </li>
          <li className={classes.li}>
            <a href="/">
              <svg
                className={classes.headerIcon}
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z"
                        fill="#cbe2ff"
                      />
                    </g>
                    <g>
                      <path
                        d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z"
                        fill="#bed8fb"
                      />
                    </g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z"
                            fill="#365e7d"
                          />
                          <path
                            d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z"
                            fill="#2b4d66"
                          />
                          <path
                            d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z"
                            fill="#4a80aa"
                          />
                          <path
                            d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z"
                            fill="#407093"
                          />
                          <path
                            d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z"
                            fill="#e4f6ff"
                          />
                          <path
                            d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z"
                            fill="#e28086"
                          />
                          <path
                            d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z"
                            fill="#dd636e"
                          />
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <g>
                                      <g>
                                        <g>
                                          <path
                                            d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z"
                                            fill="#ffddce"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <path
                              d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z"
                              fill="#ffddce"
                            />
                            <path
                              d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z"
                              fill="#ffcbbe"
                            />
                          </g>
                          <g fill="#f4fbff">
                            <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                            <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                          </g>
                        </g>
                        <path
                          d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z"
                          fill="#365e7d"
                        />
                        <path
                          d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z"
                          fill="#365e7d"
                        />
                        <path
                          d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z"
                          fill="#dd636e"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
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
        {/* <ul>
            <li className={classes.li}>
              <Link className={classes.blockRef} to="/">Главная</Link>
              <Link className={classes.blockRef} to="/">Мои данные</Link>
              <Link className={classes.blockRef} to="/">Моё имушество</Link>
              <Link className={classes.blockRef} to="/">Мои документы</Link>
              <Link className={classes.blockRef} to="/">Моя семья</Link>
              <Link className={classes.blockRef} to="/">Моя работа</Link>
              <Link className={classes.blockRef} to="/">Мои обращения</Link>
            </li>
          </ul> */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => console.log('Main click')}>
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
              <ListItemButton sx={{ pl: 2 }}>
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

          <ListItemButton onClick={() => console.log('Questions click')}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Мои обращения" />
          </ListItemButton>
        </List>
      </nav>
      <section className={classes.mainContent}>
        <Paper elevation={3} className={classes.profileContainer}>
            <div className={classes.nameAndPhotoContainer}>
              <svg
                className={classes.profileIcon}
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z"
                        fill="#cbe2ff"
                      />
                    </g>
                    <g>
                      <path
                        d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z"
                        fill="#bed8fb"
                      />
                    </g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z"
                            fill="#365e7d"
                          />
                          <path
                            d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z"
                            fill="#2b4d66"
                          />
                          <path
                            d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z"
                            fill="#4a80aa"
                          />
                          <path
                            d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z"
                            fill="#407093"
                          />
                          <path
                            d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z"
                            fill="#e4f6ff"
                          />
                          <path
                            d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z"
                            fill="#e28086"
                          />
                          <path
                            d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z"
                            fill="#dd636e"
                          />
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <g>
                                      <g>
                                        <g>
                                          <path
                                            d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z"
                                            fill="#ffddce"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <path
                              d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z"
                              fill="#ffddce"
                            />
                            <path
                              d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z"
                              fill="#ffcbbe"
                            />
                          </g>
                          <g fill="#f4fbff">
                            <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                            <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                          </g>
                        </g>
                        <path
                          d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z"
                          fill="#365e7d"
                        />
                        <path
                          d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z"
                          fill="#365e7d"
                        />
                        <path
                          d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z"
                          fill="#dd636e"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <h2 style={{ fontSize: "36px" }}>Иванов Иван Иванович</h2>
            </div>
            <div className={classes.profileForm}>
              <Paper style={{background: "rgba(196, 196, 196, 0.25)"}} className={classes.dataField}>
                <h2>Телефон</h2>
                <p className={classes.userData}>8 999 123-45-67</p>
                <Button variant="outlined">Изменить</Button>
              </Paper>
              <Paper style={{background: "rgba(196, 196, 196, 0.25)"}} className={classes.dataField}>
                <h2>Эл. почта</h2>
                <p className={classes.userData}>ivanov@mail.ru</p>
                <Button variant="outlined">Изменить</Button>
              </Paper>
              <Paper style={{background: "rgba(196, 196, 196, 0.25)"}} className={classes.dataField}>
                <h2>Пароль</h2>
                <p className={classes.userData}>•••••••••••••••••••••••••</p>
                <Button variant="outlined">Изменить</Button>
              </Paper>
            </div>
        </Paper>
      
        {/* <div className={classes.profileContainer}>
          <div className={classes.nameAndPhotoContainer}>
            <svg
              className={classes.profileIcon}
              id="Capa_1"
              enableBackground="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z"
                      fill="#cbe2ff"
                    />
                  </g>
                  <g>
                    <path
                      d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z"
                      fill="#bed8fb"
                    />
                  </g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z"
                          fill="#365e7d"
                        />
                        <path
                          d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z"
                          fill="#2b4d66"
                        />
                        <path
                          d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z"
                          fill="#4a80aa"
                        />
                        <path
                          d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z"
                          fill="#407093"
                        />
                        <path
                          d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z"
                          fill="#e4f6ff"
                        />
                        <path
                          d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z"
                          fill="#e28086"
                        />
                        <path
                          d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z"
                          fill="#dd636e"
                        />
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <g>
                                      <g>
                                        <path
                                          d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z"
                                          fill="#ffddce"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <path
                            d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z"
                            fill="#ffddce"
                          />
                          <path
                            d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z"
                            fill="#ffcbbe"
                          />
                        </g>
                        <g fill="#f4fbff">
                          <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                          <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                        </g>
                      </g>
                      <path
                        d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z"
                        fill="#365e7d"
                      />
                      <path
                        d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z"
                        fill="#365e7d"
                      />
                      <path
                        d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z"
                        fill="#dd636e"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h2 style={{ fontSize: "36px" }}>Иванов Иван Иванович</h2>
          </div>
          <div className={classes.profileForm}>
            <div className={classes.dataField}>
              <h2>Телефон</h2>
              <p className={classes.userData}>8 999 123-45-67</p>
              <Button variant="outlined">Изменить</Button>
            </div>
            <div className={classes.dataField}>
              <h2>Эл. почта</h2>
              <p className={classes.userData}>ivanov@mail.ru</p>
              <Button variant="outlined">Изменить</Button>
            </div>
            <div className={classes.dataField}>
              <h2>Пароль</h2>
              <p className={classes.userData}>•••••••••••••••••••••••••</p>
              <Button variant="outlined">Изменить</Button>
            </div>
          </div>
        </div>*/}
      </section> 
    </div>
  );
}

export default UserProfilePage;
