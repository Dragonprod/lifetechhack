import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { setFormData } from "../store/dataStorage/actions";
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';
import { Button, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  section:{
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1300px"
  },
  verticalContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  cardsContainer:{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "1300px"
  },
  cardsImg:{
    width: "200px",
  },
  problemCard:{
    maxWidth: "20%",
    padding: "2em"
  },
  header:{
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    position: "fixed",
    background: "#fff"
  },
  ref:{
    color: "#000",
    textDecoration: "none",
    padding: ".5em 2em"
  }

}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <header className={classes.header}>
        <h2 style={{color: "#EF2D56", fontSize: "32px", fontWeight: 900}}>UDMHELP</h2>
        <nav style={{display: "flex", alignItems: "center", justifyItems: "space-around"}}>
          <a className={classes.ref} href="#">Главная</a>
          <a className={classes.ref} href="#">Проблематика</a>
          <a className={classes.ref} href="#">Решение</a>
          <a className={classes.ref} style={{border: "1px solid #EF2D56", borderRadius: "5px", marginLeft: "4em", marginRight: "2em"}} href="/login">Зайти в ЛК</a>
          <a className={classes.ref} style={{border: "1px solid #3D348B", borderRadius: "5px"}} href="/admin">Зайти в админ панель</a>
        </nav>
      </header>
      <section className={classes.section}>
        <div className={classes.contentContainer}>
          <div className={classes.textBox}>
           
              <h1 style={{color: "#EF2D56", fontSize: "48px", fontWeight: 900}}>Современные проблемы требуют современных решений!</h1>

          </div>
          <img src="https://image.freepik.com/free-vector/team-starting-project_74855-4818.jpg" alt="Изображение"/>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.verticalContainer}>
          <h1 style={{color: "#EF2D56", fontSize: "48px", fontWeight: 900}}>Проблематика нашего кейса</h1>
          <div className={classes.cardsContainer}>
            <Paper className={classes.problemCard}>
              <h2>Множество неструктурированных данных</h2>
              <img className={classes.cardsImg} src="https://sun1-26.userapi.com/impg/CwvWECW-RaGro0hH0Fa_yPGbV1rIW-qC6QAUyw/U3pwwauWEKU.jpg?size=406x306&quality=96&sign=f6759a2630662309b435a2e5e8334d21&type=album" alt=""/>
              <p>Администрация района не может быстро получать актуальную информацию по профилю бедности в регионе</p>
            </Paper>
            <Paper className={classes.problemCard}>
              <h2>Нет удобного сервиса для отслеживания статистики</h2>
              <img className={classes.cardsImg} src="https://sun9-29.userapi.com/impg/KmJPriT6P68LJI69Ft0cUiciy3Ixr7k-JvkXEw/zFaAeP0PewY.jpg?size=406x306&quality=96&sign=1db980c9a434507b03183251c67ee13a&type=album" alt=""/>
              <p>Жители республики не могут получать помощь онлайн</p>
            </Paper>
            <Paper className={classes.problemCard}>
              <h2>Нет единой базы для быстрого формирования списков</h2>
              <img className={classes.cardsImg} src="https://sun9-3.userapi.com/impg/KIpHJ8XB_vxfkAJ29-T2fML-BA0MhNxYaBi5QQ/bVdgLltg6Uk.jpg?size=406x306&quality=96&sign=512c66e0edf7df2b7dcfdd31d35a576c&type=album" alt=""/>
              <p>Существуют трудности между взаимодействием гос. структур, поэтому не удавалось создать единую базу</p>
            </Paper>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.contentContainer}>
          <div className={classes.textBox}>
            <Paper style={{marginRight: "2em", padding: "1em"}}>
              <h1 style={{color: "#EF2D56", fontSize: "48px", fontWeight: 900}}>Наше решение!</h1>
              <p style={{fontSize: "24px"}}>Социальный калькулятор для граждан</p>
              <p style={{fontSize: "24px"}}>Тепловая карта бедности</p>
              <p style={{fontSize: "24px"}}>Статистика по регионам</p>
              <p style={{fontSize: "24px"}}>Трекинг обращений граждан</p>
            </Paper>
          </div>
          <img style={{width: "800px"}} src="https://sun9-74.userapi.com/impg/Ajhnqjxwq0qOOOQl9LlyFr2oW7RBFBewwH71Jw/-Ssg86eRTk0.jpg?size=1232x880&quality=96&sign=e3078bf0dbcf7b9cbd94c57853d773ac&type=album" alt="Изображение"/>
        </div>
      </section>
      {/* <Button
        variant="outlined"
        onClick={() => {
          props.push("/profile");
        }}
      >
        Profile
      </Button>
      
      <Button
        variant="outlined"
        onClick={() => {
          props.push("/login");
        }}
      >
        Login
      </Button>
     */}
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
)(withStyles(useStyles)(LandingPage));
