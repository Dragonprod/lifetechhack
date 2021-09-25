import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../../store/dataStorage/actions";
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';


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

function RequestsPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.mainGrid}>
      <h1>RequestsPage</h1>
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
)(withStyles(useStyles)(RequestsPage));

